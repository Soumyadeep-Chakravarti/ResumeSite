---
layout: default_posts
title: Autopost Updater
date: 2024-07-19
---

### Explanation:

1. **Jekyll Template**:

   - The `blog.html` file uses Liquid to loop through all posts in the `_posts` directory and display them with links and excerpts.

2. **GitHub Actions Workflow**:
   - The workflow is triggered on pushes to the `main` branch and runs daily at midnight.
   - It checks out the repository, sets up Ruby, installs Bundler and dependencies, and checks for changes in the `_posts` folder.
   - If there are changes in the `_posts` folder, it exits with an error indicating new posts are detected.

### Next Steps:

1. **Commit and Push**:

   ```sh
   git add .github/workflows/check-new-posts.yml blog.html
   git commit -m "Add blog template and GitHub Actions workflow for checking new posts"
   git push origin main
   ```

2. **Verify Workflow**:
   - Ensure the workflow runs correctly in the GitHub Actions tab of your repository.
   - Manually create a new post in `_posts` and push to verify the workflow detects it.

This setup ensures your blog is updated with new posts, and you are notified if new posts are added to the `_posts` folder.
