
import {
    Table,
    ReferenceColumn,
    IntegerColumn,
    BooleanColumn,
    DateTimeColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

// HireFlow Onboarding Task extends the standard Task table.
// Inherits standard fields such as assigned_to, assignment_group,
// state, due_date and short_description.
//
// Verification Status links the onboarding task to its corresponding
// BGV / PF / ESI verification record.

export const x_2300649_hirefl_0_onboarding_task = Table({
    name: 'x_2300649_hirefl_0_onboarding_task',
    label: 'HireFlow Onboarding Task',
    audit: true,
    extends: 'task',

    schema: {
        joiner: ReferenceColumn({
            label: 'Joiner',
            referenceTable: 'x_2300649_hirefl_0_joiner',
            mandatory: true,
        }),

        template_task: ReferenceColumn({
            label: 'Template Task',
            referenceTable: 'x_2300649_hirefl_0_template_task',
            mandatory: true,
        }),

        // Links this onboarding task to its verification record.
        verification_status: ReferenceColumn({
            label: 'Verification Status',
            referenceTable: 'x_2300649_hirefl_0_verification_status',
        }),

        requested_on: DateTimeColumn({
            label: 'Requested On',
        }),

        forecast_completion_date: DateTimeColumn({
            label: 'Forecast Completion Date',
        }),

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

        weight: IntegerColumn({
            label: 'Weight',
            mandatory: true,
        }),

        mandatory: BooleanColumn({
            label: 'Mandatory',
            mandatory: true,
        }),

        score: IntegerColumn({
            label: 'Score',
            default: 0,
            mandatory: true,
        }),

        evidence_verified: BooleanColumn({
            label: 'Evidence Verified',
            default: false,
            mandatory: true,
        }),

        nudge_count: IntegerColumn({
            label: 'Nudge Count',
            default: 0,
            mandatory: true,
        }),

        hand_off_to_hr: BooleanColumn({
            label: 'Hand Off to HR',
            default: false,
            mandatory: true,
        }),
    },
})
