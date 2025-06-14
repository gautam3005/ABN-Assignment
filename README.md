# ABN-Assignment
Repo for the assignment for QA Engineer

# 📘 Playwright Test Automation Framework

A Node.js-based end-to-end test automation framework using [Playwright](https://playwright.dev/) for modern web applications.

## 🚀 Features

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- 🧪 Page Object Model (POM) structure
- 📊 HTML reporting (Playwright's built-in reports)
- ⚙️ CI integration via GitHub Actions
- 📁 Data-driven testing using JSON files

---

## 📂 Project Structure

├── ABN_Assignment_Pages/ # Page Object Models

├── abn_assignment_test/ # Playwright test specs

├── abn_assignment_testdata/ # Test data in JSON

├── playwright.config.js # Playwright config

├── package.json # Project dependencies & scripts

├── .github/workflows/ # CI workflows (GitHub Actions)

└── README.md               # Project documentation

## 🛠️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps
```

🧪 Running Tests Locally 
Run all tests (default):
```bash
npx playwright test
```
Run tests in Chromium only:
```bash
npx playwright test --project=chromium
```
View HTML report:
```bash
npx playwright show-report
```

⚙️ GitHub Actions CI
  *This repo includes a CI workflow
  
  *Runs on every push and pull_request to main or master
  
  *Installs dependencies
  
  *Runs Playwright tests in Chromium, WebKit and Firefox
  
  *Uploads test report artifacts
  
  *Location: .github/workflows/playwright.yml

🙌 Acknowledgements

[Playwright](https://playwright.dev/)

[GitHub Actions](https://docs.github.com/en/actions)


