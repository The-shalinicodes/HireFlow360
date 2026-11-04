import {
    Table,
    ReferenceColumn,
    StringColumn,
    BooleanColumn,
    DateTimeColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_allocation = Table({
    name: 'x_2300649_hirefl_0_allocation',
    label: 'HireFlow Allocation',
    audit: true,
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        manager: ReferenceColumn({ label: 'Manager', referenceTable: 'sys_user', mandatory: true }),
        department: ReferenceColumn({ label: 'Department', referenceTable: 'cmn_department', mandatory: true }),
        team_name: StringColumn({ label: 'Team Name', maxLength: 100 }),
        project_name: StringColumn({ label: 'Project Name', maxLength: 150 }),
        bgv_clear: BooleanColumn({ label: 'BGV Clear', default: false, readOnly: true }),
        training_complete: BooleanColumn({ label: 'Training Complete', default: false, readOnly: true }),
        compliance_complete: BooleanColumn({ label: 'Compliance Complete', default: false, readOnly: true }),
        eligibility_date: DateTimeColumn({ label: 'Eligibility Date' }),
        allocation_status: ChoiceColumn({
            label: 'Allocation Status',
            choices: {
                pending: { label: 'Pending' },
                eligible: { label: 'Eligible' },
                allocated: { label: 'Allocated' },
                on_hold: { label: 'On Hold' },
                on_bench: { label: 'On Bench' },
            },
            default: 'pending',
            mandatory: true,
        }),
        approved_by: ReferenceColumn({ label: 'Approved By', referenceTable: 'sys_user' }),
        approval_date: DateTimeColumn({ label: 'Approval Date' }),
    },
})
