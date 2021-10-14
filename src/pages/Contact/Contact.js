import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import { useAuth } from 'base-shell/lib/providers/Auth';
import { BookMeetingInlineWidget } from 'components/BookMeeting';
import { default as config } from '../../config';

const ContactPage = () => {
  const intl = useIntl()
  const { auth } = useAuth();
  const {
    displayName = '',
    email = '',
  } = auth

  return (
    <Page pageTitle={intl.formatMessage({ id: 'contact' })}>
      <BookMeetingInlineWidget
        user={{ email: email, name: displayName }}
        calenly={{
          url: config.calendly.url
        }}
      />
    </Page>
  )
}
export default ContactPage
