# ⏱️ Station 2: Async Interval

## 🎯 The Goal
Fetch a list of posts from an API and display them.

## 📋 Instructions
1. Fetch posts from `https://jsonplaceholder.typicode.com/posts?_limit=5`.
2. Display a "Loading..." message while the data is being fetched.
3. Once loaded, render a list of post titles.
4. If the fetch fails, display "Error loading posts."
5. Include a "Refetch" button that triggers the fetch again.

## 🚫 Constraints
- Use the native `fetch` API.
- Use `useEffect` correctly to handle the initial fetch.
- Ensure there are no memory leaks (handle the component unmounting).

## ⏱️ Estimated Time
10-15 Minutes
