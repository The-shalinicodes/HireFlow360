import {
    Table,
    ReferenceColumn,
    ChoiceColumn,
    BooleanColumn,
    DateTimeColumn,
    StringColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_task_evidence = Table({
    name: 'x_2300649_hirefl_0_task_evidence',
    label: 'HireFlow Task Evidence',
    audit: true,
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        onboarding_task: ReferenceColumn({ label: 'Onboarding Task', referenceTable: 'x_2300649_hirefl_0_onboarding_task', mandatory: true }),
        evidence_type: ChoiceColumn({
            label: 'Evidence Type',
            choices: {
                document: { label: 'Document' },
                screenshot: { label: 'Screenshot' },
                approval: { label: 'Approval' },
                system_record: { label: 'System Record' },
                other: { label: 'Other' },
            },
            mandatory: true,
        }),
        verification_method: ChoiceColumn({
            label: 'Verification Method',
            choices: {
                manual: { label: 'Manual' },
                automated: { label: 'Automated' },
            },
            default: 'manual',
            mandatory: true,
        }),
        source_table: StringColumn({ label: 'Source Table', maxLength: 80 }),
        source_record: StringColumn({ label: 'Source Record (sys_id)', maxLength: 32 }),
        integration_transaction: ReferenceColumn({ label: 'Integration Transaction', referenceTable: 'x_2300649_hirefl_0_integration_transaction_log' }),
        valid: BooleanColumn({ label: 'Valid', default: false, mandatory: true, readOnly: true }),
        review_status: ChoiceColumn({
            label: 'Review Status',
            choices: {
                submitted: { label: 'Submitted' },
                under_review: { label: 'Under Review' },
                approved: { label: 'Approved' },
                rejected: { label: 'Rejected' },
            },
            default: 'submitted',
            mandatory: true,
        }),
        submitted_by: ReferenceColumn({ label: 'Submitted By', referenceTable: 'sys_user' }),
        submitted_at: DateTimeColumn({ label: 'Submitted At' }),
        reviewer: ReferenceColumn({ label: 'Reviewer', referenceTable: 'sys_user' }),
        review_date: DateTimeColumn({ label: 'Review Date' }),
        recheck_date: DateTimeColumn({ label: 'Recheck Date' }),
        rejection_reason: StringColumn({ label: 'Rejection Reason', maxLength: 4000 }),
    },
})
