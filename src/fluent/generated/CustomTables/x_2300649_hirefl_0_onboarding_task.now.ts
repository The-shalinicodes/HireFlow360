import {
    Table,
    ReferenceColumn,
    IntegerColumn,
    BooleanColumn,
    DateTimeColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

// Uses the standard Task table as the parent.
// This provides standard task fields such as assigned_to, assignment_group,
// state, due_date and short_description. Confirm parent-table accessibility
// in the target PDI before deployment.
export const x_2300649_hirefl_0_onboarding_task = Table({
    name: 'x_2300649_hirefl_0_onboarding_task',
    label: 'HireFlow Onboarding Task',
    audit: true,
    extends: 'task',
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        template_task: ReferenceColumn({ label: 'Template Task', referenceTable: 'x_2300649_hirefl_0_template_task', mandatory: true }),
        requested_on: DateTimeColumn({ label: 'Requested On' }),
        forecast_completion_date: DateTimeColumn({ label: 'Forecast Completion Date' }),
        gate: ChoiceColumn({
            label: 'Gate',
            choices: {
                day1: { label: 'Day-1 Gate' },
                allocation: { label: 'Allocation Gate' },
                post_joining: { label: 'Post-joining' },
            },
            default: 'day1',
            mandatory: true,
        }),
        weight: IntegerColumn({ label: 'Weight', mandatory: true }),
        mandatory: BooleanColumn({ label: 'Mandatory', mandatory: true }),
        score: IntegerColumn({ label: 'Score', default: 0, mandatory: true }),
        evidence_verified: BooleanColumn({ label: 'Evidence Verified', default: false, mandatory: true }),
        nudge_count: IntegerColumn({ label: 'Nudge Count', default: 0, mandatory: true }),
        hand_off_to_hr: BooleanColumn({ label: 'Hand Off to HR', default: false, mandatory: true }),
    },
})
