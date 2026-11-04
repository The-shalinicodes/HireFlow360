import {
    Table,
    ReferenceColumn,
    DateTimeColumn,
    DecimalColumn,
    ChoiceColumn,
    IntegerColumn,
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_readiness_snapshot = Table({
    name: 'x_2300649_hirefl_0_readiness_snapshot',
    label: 'HireFlow Readiness Snapshot',
    audit: true,
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        run_date: DateTimeColumn({ label: 'Run Date', mandatory: true }),
        readiness_score: DecimalColumn({ label: 'Readiness Score', readOnly: true }),
        threshold: DecimalColumn({ label: 'Threshold', mandatory: true }),
        readiness_status: ChoiceColumn({
            label: 'Readiness Status',
            choices: {
                on_track: { label: 'On Track' },
                at_risk: { label: 'At Risk' },
                blocked: { label: 'Blocked' },
            },
            mandatory: true,
        }),
        earliest_blocker: ReferenceColumn({ label: 'Earliest Blocker', referenceTable: 'x_2300649_hirefl_0_onboarding_task' }),
        forecast_date: DateTimeColumn({ label: 'Forecast Date' }),
        mandatory_pending_count: IntegerColumn({ label: 'Mandatory Pending Count', default: 0, mandatory: true }),
        evidence_pending_count: IntegerColumn({ label: 'Evidence Pending Count', default: 0, mandatory: true }),
        forecast_reason: StringColumn({ label: 'Forecast Reason', maxLength: 4000 }),
        calculated_by: ChoiceColumn({
            label: 'Calculated By',
            choices: {
                system: { label: 'System' },
                scheduled_job: { label: 'Scheduled Job' },
                user: { label: 'User' },
            },
            mandatory: true,
        }),
        days_to_join: IntegerColumn({ label: 'Days to Join' }),
        forecast_late: BooleanColumn({ label: 'Forecast Late', default: false, mandatory: true }),
        first_flagged_on: DateTimeColumn({ label: 'First Flagged On' }),
    },
})
