import {
    Table,
    ReferenceColumn,
    ChoiceColumn,
    DateTimeColumn,
    IntegerColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_nudge_log = Table({
    name: 'x_2300649_hirefl_0_nudge_log',
    label: 'HireFlow Nudge Log',
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        onboarding_task: ReferenceColumn({ label: 'Onboarding Task', referenceTable: 'x_2300649_hirefl_0_onboarding_task', mandatory: true }),
        recipient: ReferenceColumn({ label: 'Recipient', referenceTable: 'sys_user', mandatory: true }),
        nudge_type: ChoiceColumn({
            label: 'Nudge Type',
            choices: {
                first_reminder: { label: 'First Reminder' },
                second_reminder: { label: 'Second Reminder' },
                final_reminder: { label: 'Final Reminder' },
                hr_handoff: { label: 'HR Handoff' },
            },
            mandatory: true,
        }),
        channel: ChoiceColumn({
            label: 'Channel',
            choices: {
                email: { label: 'Email' },
                notification: { label: 'Notification' },
                sms: { label: 'SMS' },
            },
            default: 'email',
            mandatory: true,
        }),
        sent_date: DateTimeColumn({ label: 'Sent Date' }),
        delivery_status: ChoiceColumn({
            label: 'Delivery Status',
            choices: {
                sent: { label: 'Sent' },
                delivered: { label: 'Delivered' },
                failed: { label: 'Failed' },
            },
            default: 'sent',
            mandatory: true,
        }),
        nudge_number: IntegerColumn({ label: 'Nudge Number' }),
        hand_off_to_hr: BooleanColumn({ label: 'Hand Off to HR', default: false, mandatory: true }),
    },
})
