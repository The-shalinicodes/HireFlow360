
import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_job_application = Table({
    name: 'x_2300649_hirefl_0_job_application',
    label: 'HireFlow Job Application',
    schema: {
        application_id: StringColumn({
            label: 'Application ID',
            maxLength: 40,
            readOnly: true,
            unique: true,
        }),
        applicant: ReferenceColumn({
            label: 'Applicant',
            referenceTable: 'x_2300649_hirefl_0_applicant',
            mandatory: true,
        }),
        job_requisition: ReferenceColumn({
            label: 'Job Requisition',
            referenceTable: 'x_2300649_hirefl_0_job_requisition',
            mandatory: true,
        }),
        application_date: DateColumn({
            label: 'Application Date',
            mandatory: true,
        }),
        application_status: ChoiceColumn({
            label: 'Application Status',
            choices: {
                submitted: { label: 'Submitted' },
                under_review: { label: 'Under Review' },
                shortlisted: { label: 'Shortlisted' },
                interview_scheduled: { label: 'Interview Scheduled' },
                interview_in_progress: { label: 'Interview in Progress' },
                selected: { label: 'Selected' },
                rejected: { label: 'Rejected' },
                offer_in_progress: { label: 'Offer in Progress' },
                offer_released: { label: 'Offer Released' },
                offer_accepted: { label: 'Offer Accepted' },
                offer_declined: { label: 'Offer Declined' },
                withdrawn: { label: 'Withdrawn' },
            },
            default: 'submitted',
            mandatory: true,
        }),
        current_stage: ChoiceColumn({
            label: 'Current Recruitment Stage',
            choices: {
                application: { label: 'Application Review' },
                screening: { label: 'Screening' },
                technical: { label: 'Technical Interview' },
                managerial: { label: 'Managerial Interview' },
                hr: { label: 'HR Interview' },
                offer: { label: 'Offer Stage' },
                completed: { label: 'Completed' },
            },
            default: 'application',
        }),
        assigned_recruiter: ReferenceColumn({
            label: 'Assigned Recruiter',
            referenceTable: 'sys_user',
        }),
        last_stage_update: DateColumn({
            label: 'Last Stage Update',
        }),
        rejection_reason: StringColumn({
            label: 'Rejection Reason',
            maxLength: 1000,
        }),
    },
})
