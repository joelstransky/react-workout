import type { Reporter, File } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

export default class DashboardReporter implements Reporter {
  onFinished(files?: File[]) {
    if (!files) return;

    const results = files.reduce((acc, file) => {
      // Find which station this file belongs to
      const match = file.filepath.match(/stations[\\/]([^/\\]+)/);
      const station = match ? match[1] : 'unknown';

      if (!acc[station]) {
        acc[station] = {
          passed: 0,
          failed: 0,
          total: 0,
        };
      }

      const countTasks = (tasks: any[]) => {
        for (const task of tasks) {
          if (task.type === 'test') {
            acc[station].total++;
            if (task.result?.state === 'pass') acc[station].passed++;
            if (task.result?.state === 'fail') acc[station].failed++;
          } else if (task.tasks) {
            countTasks(task.tasks);
          }
        }
      };

      countTasks(file.tasks);
      return acc;
    }, {} as Record<string, any>);

    const outputPath = path.resolve(process.cwd(), 'public', 'test-results.json');
    if (!fs.existsSync(path.dirname(outputPath))) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    }
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  }
}
