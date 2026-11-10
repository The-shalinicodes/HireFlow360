
import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_interview = Table({
    name: 'x_2300649_hirefl_0_interview',
    label: 'HireFlow Interview',
    schema: {
        interview_id: StringColumn({
            label: 'Interview ID',
            maxLength: 40,
            readOnly: true,
            unique: true,
        }),
        job_application: ReferenceColumn({
            label: 'Job Application',
            referenceTable: 'x_2300649_hirefl_0_job_application',
            mandatory: true,
        }),
        interview_round: ChoiceColumn({
            label: 'Interview Round',
            choices: {
                screening: { label: 'Initial Screening' },
                technical_1: { label: 'Technical Round 1' },
                technical_2: { label: 'Technical Round 2' },
                managerial: { label: 'Managerial Round' },
                hr: { label: 'HR Round' },
                final: { label: 'Final Round' },
            },
            mandatory: true,
        }),
        interview_type: ChoiceColumn({
            label: 'Interview Type',
            choices: {
                online: { label: 'Online' },
                in_person: { label: 'In Person' },
                telephonic: { label: 'Telephonic' },
            },
            mandatory: true,
        }),
        interviewer: ReferenceColumn({
            label: 'Interviewer',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        scheduled_start: DateColumn({
            label: 'Scheduled Date',
            mandatory: true,
        }),
        scheduled_end: DateColumn({
            label: 'Scheduled End Date',
        }),
        meeting_link: StringColumn({
            label: 'Meeting Link',
            maxLength: 500,
        }),
        interview_status: ChoiceColumn({
            label: 'Interview Status',
            choices: {
                scheduled: { label: 'Scheduled' },
                confirmed: { label: 'Confirmed' },
                completed: { label: 'Completed' },
                cancelled: { label: 'Cancelled' },
                rescheduled: { label: 'Rescheduled' },
                no_show: { label: 'No Show' },
            },
            default: 'scheduled',
            mandatory: true,
        }),
        interview_result: ChoiceColumn({
            label: 'Interview Result',
            choices: {
                pending: { label: 'Pending' },
                passed: { label: 'Passed' },
                failed: { label: 'Failed' },
                on_hold: { label: 'On Hold' },
            },
            default: 'pending',
        }),
        interview_notes: StringColumn({
            label: 'Interview Notes',
            maxLength: 4000,
        }),
    },
})
