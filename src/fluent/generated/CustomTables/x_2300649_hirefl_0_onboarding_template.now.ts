import {
    Table,
    StringColumn,
    ReferenceColumn,
    IntegerColumn,
    DateColumn,
    ChoiceColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_onboarding_template = Table({
    name: 'x_2300649_hirefl_0_onboarding_template',
    label: 'HireFlow Onboarding Template',
    schema: {
        template_id: StringColumn({ label: 'Template ID', maxLength: 40, readOnly: true, unique: true }),
        template_name: StringColumn({ label: 'Template Name', maxLength: 150, mandatory: true, display: true }),
        job_role: ChoiceColumn({
            label: 'Job Role',
            choices: {
                software_engineer: { label: 'Software Engineer' },
                senior_software_engineer: { label: 'Senior Software Engineer' },
                qa_engineer: { label: 'QA Engineer' },
                devops_engineer: { label: 'DevOps Engineer' },
                business_analyst: { label: 'Business Analyst' },
                data_analyst: { label: 'Data Analyst' },
                project_manager: { label: 'Project Manager' },
                support_engineer: { label: 'Support Engineer' },
                hr_executive: { label: 'HR Executive' },
                other: { label: 'Other' },
            },
            mandatory: true,
        }),
        department: ReferenceColumn({ label: 'Department', referenceTable: 'cmn_department', mandatory: true }),
        location: ReferenceColumn({ label: 'Location', referenceTable: 'cmn_location', mandatory: true }),
        version: IntegerColumn({ label: 'Version', default: 1, mandatory: true }),
        effective_from: DateColumn({ label: 'Effective From', mandatory: true }),
        effective_to: DateColumn({ label: 'Effective To' }),
        approval_status: ChoiceColumn({
            label: 'Approval Status',
            choices: {
                draft: { label: 'Draft' },
                pending: { label: 'Pending' },
                approved: { label: 'Approved' },
                rejected: { label: 'Rejected' },
            },
            default: 'draft',
            mandatory: true,
        }),
        active: BooleanColumn({ label: 'Active', default: true, mandatory: true }),
    },
})
