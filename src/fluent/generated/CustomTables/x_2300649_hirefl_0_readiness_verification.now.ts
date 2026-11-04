import {
    Table,
    ReferenceColumn,
    DateTimeColumn,
    DecimalColumn,
    BooleanColumn,
    ChoiceColumn,
    StringColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_readiness_verification = Table({
    name: 'x_2300649_hirefl_0_readiness_verification',
    label: 'HireFlow Readiness Verification',
    audit: true,
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        snapshot: ReferenceColumn({ label: 'Snapshot', referenceTable: 'x_2300649_hirefl_0_readiness_snapshot', mandatory: true }),
        verification_date: DateTimeColumn({ label: 'Verification Date', mandatory: true }),
        final_score: DecimalColumn({ label: 'Final Score', readOnly: true }),
        threshold: DecimalColumn({ label: 'Threshold', mandatory: true }),
        mandatory_checks_passed: BooleanColumn({ label: 'Mandatory Checks Passed', mandatory: true }),
        evidence_checks_passed: BooleanColumn({ label: 'Evidence Checks Passed', mandatory: true }),
        final_status: ChoiceColumn({
            label: 'Final Status',
            choices: {
                ready: { label: 'Ready' },
                not_ready: { label: 'Not Ready' },
            },
            mandatory: true,
        }),
        decision_reason: StringColumn({ label: 'Decision Reason', maxLength: 4000, mandatory: true }),
        verified_by: ReferenceColumn({ label: 'Verified By', referenceTable: 'sys_user' }),
        recheck_status: ChoiceColumn({
            label: 'Recheck Status',
            choices: {
                passed: { label: 'Passed' },
                failed: { label: 'Failed' },
            },
        }),
        recheck_date: DateTimeColumn({ label: 'Recheck Date' }),
        false_ready: BooleanColumn({ label: 'False Ready', default: false, mandatory: true }),
    },
})
