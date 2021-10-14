import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import { useAuth } from 'base-shell/lib/providers/Auth';
import { BookMeetingPopupWidget } from "components/BookMeeting"
import { default as config } from '../../config'

const HomePage = () => {
  const intl = useIntl();
  const { auth } = useAuth();
  const { displayName = '', email = '', } = auth;

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Typography variant="h4">
        Hi {displayName}. How are you today?
      </Typography>
      <BookMeetingPopupWidget
        user={{ email: email, name: displayName }}
        calenly={{
          url: config.calendly.url
        }}
      />
    </Page >
  );
}
export default HomePage
