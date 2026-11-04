import {
    Table,
    ReferenceColumn,
    StringColumn,
    ChoiceColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_recovery_action = Table({
    name: 'x_2300649_hirefl_0_recovery_action',
    label: 'HireFlow Recovery Action',
    audit: true,
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        onboarding_task: ReferenceColumn({ label: 'Onboarding Task', referenceTable: 'x_2300649_hirefl_0_onboarding_task' }),
        playbook: ReferenceColumn({ label: 'Playbook', referenceTable: 'x_2300649_hirefl_0_recovery_playbook', mandatory: true }),
        exception_description: StringColumn({ label: 'Exception Description', maxLength: 4000, mandatory: true }),
        ai_recommendation: StringColumn({ label: 'AI Recommendation', maxLength: 4000, readOnly: true }),
        proposed_action: StringColumn({ label: 'Proposed Action', maxLength: 4000, mandatory: true }),
        approval_status: ChoiceColumn({
            label: 'Approval Status',
            choices: {
                not_required: { label: 'Not Required' },
                pending: { label: 'Pending' },
                approved: { label: 'Approved' },
                rejected: { label: 'Rejected' },
            },
            default: 'not_required',
            mandatory: true,
        }),
        approved_by: ReferenceColumn({ label: 'Approved By', referenceTable: 'sys_user' }),
        execution_status: ChoiceColumn({
            label: 'Execution Status',
            choices: {
                pending: { label: 'Pending' },
                in_progress: { label: 'In Progress' },
                completed: { label: 'Completed' },
                failed: { label: 'Failed' },
                cancelled: { label: 'Cancelled' },
            },
            default: 'pending',
            mandatory: true,
        }),
        assigned_group: ReferenceColumn({ label: 'Assigned Group', referenceTable: 'sys_user_group', mandatory: true }),
        resolution_date: DateTimeColumn({ label: 'Resolution Date' }),
    },
})
