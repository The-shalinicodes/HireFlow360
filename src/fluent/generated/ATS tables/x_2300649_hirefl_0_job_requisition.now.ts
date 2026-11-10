
import {
    Table,
    StringColumn,
    ReferenceColumn,
    IntegerColumn,
    DateColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_job_requisition = Table({
    name: 'x_2300649_hirefl_0_job_requisition',
    label: 'HireFlow Job Requisition',
    schema: {
        requisition_id: StringColumn({
            label: 'Requisition ID',
            maxLength: 40,
            readOnly: true,
            unique: true,
        }),
        job_title: StringColumn({
            label: 'Job Title',
            maxLength: 150,
            mandatory: true,
            display: true,
        }),
        department: ReferenceColumn({
            label: 'Department',
            referenceTable: 'cmn_department',
            mandatory: true,
        }),
        hiring_manager: ReferenceColumn({
            label: 'Hiring Manager',
            referenceTable: 'sys_user',
        }),
        location: ReferenceColumn({
            label: 'Location',
            referenceTable: 'cmn_location',
            mandatory: true,
        }),
        employment_type: ChoiceColumn({
            label: 'Employment Type',
            choices: {
                full_time: { label: 'Full Time' },
                part_time: { label: 'Part Time' },
                internship: { label: 'Internship' },
                contract: { label: 'Contract' },
            },
            mandatory: true,
        }),
        openings: IntegerColumn({
            label: 'Number of Openings',
            default: 1,
            mandatory: true,
        }),
        minimum_experience: IntegerColumn({
            label: 'Minimum Experience (Years)',
            default: 0,
        }),
        maximum_experience: IntegerColumn({
            label: 'Maximum Experience (Years)',
        }),
        job_description: StringColumn({
            label: 'Job Description',
            maxLength: 4000,
            mandatory: true,
        }),
        required_skills: StringColumn({
            label: 'Required Skills',
            maxLength: 2000,
        }),
        target_joining_date: DateColumn({
            label: 'Target Joining Date',
        }),
        posting_date: DateColumn({
            label: 'Posting Date',
        }),
        closing_date: DateColumn({
            label: 'Application Closing Date',
        }),
        priority: ChoiceColumn({
            label: 'Priority',
            choices: {
                low: { label: 'Low' },
                medium: { label: 'Medium' },
                high: { label: 'High' },
                urgent: { label: 'Urgent' },
            },
            default: 'medium',
            mandatory: true,
        }),
        requisition_status: ChoiceColumn({
            label: 'Requisition Status',
            choices: {
                draft: { label: 'Draft' },
                pending_approval: { label: 'Pending Approval' },
                approved: { label: 'Approved' },
                open: { label: 'Open' },
                on_hold: { label: 'On Hold' },
                closed: { label: 'Closed' },
                cancelled: { label: 'Cancelled' },
            },
            default: 'draft',
            mandatory: true,
        }),
    },
})
