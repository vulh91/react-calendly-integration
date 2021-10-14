# React app with Calendly integration
A simple react app to demonstrate basic integration with Calendly.

## How to use?
- Clone the repos
- `yarn`
- `yarn start`

## Basic structure and features
- Default page is the landing page, click App to login if not yet.
- This is a mock Auth. Use your email to login with any password. There's no backend for this app currently.
- A logged in user should be able to manage his profile, such as: avatar, display name in /my_account. Navigate to it by clicking on Email > My Account.
- The home page is just a welcome message. There is a button fixed at bottom-right of the page for the user to start a new booking using Calendly. Alternatively, there is /contact page with an inline widget to setup a booking. I'm just demonstrate different methods for user to start a booking.
- Notice that when the user creates a new booking, some fields are prefilled using current signed in user data.
- I did setup a calendly using my own email. It's possible to setup organization, team and [robin event type](https://help.calendly.com/hc/en-us/articles/223146327-Distribute-events-round-robin-to-team-members#distribute-events-round-robin-to-team-members-0-0). However, you'll need a Premium or Pro subscription to do that. The same with the watermark, we can only remove it using a paid account.

## Notes & Thoughts
- A signed-in user should be able to book a meeting with The Martec. This should be the primary goal of this integration.
- There can be multiple ways for the user to start a new booking flow: a dedicated contact page, or a button placed at a fixed position globally.
- All Calendly setups, including event types, people, workflows are done withhin Calendly web admin. It's my first time using Calendly but I have no trouble with it, the setup process is very intuitive.
- The booking flow should be driven by Calendly, including sending email, scheduling the call, update calendars.
- Calendly API is, indeed, very simple, we can:
  - get users, event types, event invitees, events (info about scheduled meetings), etc.
  - manage users within the organizations.
  - manage webhooks, which can be useful if we need a unified way to get notifications in the backend about activities, events happenning within the Calendly account.
- Integration with Calendly can be extended further using its API, and/or features such as Workflow, Webhooks. For the basic integration, we don't need them.
- I didn't test the app much, but it should be responsive and mobile friendly.