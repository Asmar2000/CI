# CI

Objective:

Investigated system behavior post-creation of 200k+ users to validate notification delivery.
Implementation:

Automated user creation using Cypress by invoking the user creation API.
Integrated code with GitHub Actions for parallel execution using cypress-parallel.
Configured a cronjob to trigger workflow every 6 hours, emulating continuous load testing.
Monitored system logs to ensure successful notification delivery for all users.
Technologies:

Cypress for end-to-end testing.
GitHub Actions for continuous integration.
cypress-parallel for parallel test execution.
Results:

Provided valuable insights into system behavior under high load conditions.
Verified robust notification functionality through thorough testing.
Demonstrated expertise in test automation, CI/CD, and load testing.
