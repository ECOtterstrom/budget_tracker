# Week 18 Bootcamp Assignment: Budget Tracker

## User Story

As a frequent traveller, I need to be able to track my budget from anywhere.  Therefore, I would like to have a budget tracking application where I can enter deposits, subtract expenses, and view my remaining total at any time.  This application needs to function whether I am online or offline so I can have access to my budget at all times.

## Application Updates

* Using a previously created Budget Tracker application, functionality was added that enables users to update information while offline. When the application goes back online, all data entered while offline is moved to a NOSQL database for permanent storage.

* The application now allows users to add deposits to and subtract expenses from their budget with or without a connection. Both the budget total and the budget graph continue to update when entering transactions. All data continues to display within the application when it goes back online.

**Offline Functionality:**

* Enter data for both deposits and expenses.

**Online Functionality:**

* Offline entries are pushed to the database and are visible in the Budget Tracker.

## Deployed Application

https://fierce-dusk-53707.herokuapp.com/
