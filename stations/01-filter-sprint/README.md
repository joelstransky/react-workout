# 🏃‍♂️ Station 1: The Filter Sprint

## 🎯 The Goal
Build a searchable user list.

## 📋 Instructions
1. Render a list of users provided in the `USERS` constant.
2. Add an `<input>` field to filter the list by name.
3. The filtering should be **case-insensitive**.
4. If no users match the filter, display "No users found."

## 🚫 Constraints
- **NO `useEffect`:** Use derived state (memoize logic during render).
- **Controlled Input:** Use `useState` for the search term.
- **Performance:** Ensure you aren't calculating the filtered list more than necessary.

## ⏱️ Estimated Time
10-15 Minutes
