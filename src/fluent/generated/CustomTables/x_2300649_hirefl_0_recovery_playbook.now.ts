import {
    Table,
    StringColumn,
    ChoiceColumn,
    ReferenceColumn,
    BooleanColumn,
    IntegerColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_recovery_playbook = Table({
    name: 'x_2300649_hirefl_0_recovery_playbook',
    label: 'HireFlow Recovery Playbook',
    schema: {
        playbook_name: StringColumn({ label: 'Playbook Name', maxLength: 150, mandatory: true, display: true }),
        exception_type: ChoiceColumn({
            label: 'Exception Type',
            choices: {
                device_delay: { label: 'Device Delay' },
                access_delay: { label: 'Access Delay' },
                bgv_issue: { label: 'BGV Issue' },
                integration_failure: { label: 'Integration Failure' },
                plan_change: { label: 'Plan Change' },
                offer_withdrawn: { label: 'Offer Withdrawn / No-show / Revoked' },
            },
            mandatory: true,
        }),
        option_order: IntegerColumn({ label: 'Option Order', default: 1, mandatory: true }),
        recommended_action: StringColumn({ label: 'Recommended Action', maxLength: 4000, mandatory: true }),
        responsible_group: ReferenceColumn({ label: 'Responsible Group', referenceTable: 'sys_user_group', mandatory: true }),
        approval_required: BooleanColumn({ label: 'Approval Required', default: false, mandatory: true }),
        approval_group: ReferenceColumn({ label: 'Approval Group', referenceTable: 'sys_user_group' }),
        priority: ChoiceColumn({
            label: 'Priority',
            choices: {
                critical: { label: 'Critical' },
                high: { label: 'High' },
                medium: { label: 'Medium' },
                low: { label: 'Low' },
            },
            default: 'medium',
            mandatory: true,
        }),
        active: BooleanColumn({ label: 'Active', default: true, mandatory: true }),
    },
})
