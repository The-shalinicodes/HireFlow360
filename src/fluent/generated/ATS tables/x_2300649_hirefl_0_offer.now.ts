
import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_offer = Table({
    name: 'x_2300649_hirefl_0_offer',
    label: 'HireFlow Offer',
    schema: {
        offer_id: StringColumn({
            label: 'Offer ID',
            maxLength: 40,
            readOnly: true,
            unique: true,
        }),
        job_application: ReferenceColumn({
            label: 'Job Application',
            referenceTable: 'x_2300649_hirefl_0_job_application',
            mandatory: true,
        }),
        applicant: ReferenceColumn({
            label: 'Applicant',
            referenceTable: 'x_2300649_hirefl_0_applicant',
            mandatory: true,
        }),
        offer_status: ChoiceColumn({
            label: 'Offer Status',
            choices: {
                draft: { label: 'Draft' },
                pending_approval: { label: 'Pending Approval' },
                approved: { label: 'Approved' },
                released: { label: 'Released' },
                accepted: { label: 'Accepted' },
                declined: { label: 'Declined' },
                withdrawn: { label: 'Withdrawn' },
                expired: { label: 'Expired' },
            },
            default: 'draft',
            mandatory: true,
        }),
        offer_date: DateColumn({
            label: 'Offer Date',
        }),
        joining_date: DateColumn({
            label: 'Proposed Joining Date',
            mandatory: true,
        }),
        response_deadline: DateColumn({
            label: 'Offer Response Deadline',
        }),
        offer_document_reference: StringColumn({
            label: 'Offer Document Reference',
            maxLength: 100,
        }),
        joiner: ReferenceColumn({
            label: 'Created Joiner',
            referenceTable: 'x_2300649_hirefl_0_joiner',
        }),
        handoff_status: ChoiceColumn({
            label: 'Onboarding Handoff Status',
            choices: {
                not_started: { label: 'Not Started' },
                pending: { label: 'Pending' },
                completed: { label: 'Completed' },
                failed: { label: 'Failed' },
            },
            default: 'not_started',
            mandatory: true,
        }),
        handoff_error: StringColumn({
            label: 'Handoff Error Details',
            maxLength: 2000,
        }),
    },
})
