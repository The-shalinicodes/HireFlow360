import {
    Table,
    ReferenceColumn,
    ChoiceColumn,
    BooleanColumn,
    DateTimeColumn,
    StringColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_asset_assignment = Table({
    name: 'x_2300649_hirefl_0_asset_assignment',
    label: 'HireFlow Asset Assignment',
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        asset: ReferenceColumn({ label: 'Asset', referenceTable: 'alm_hardware' }),
        asset_type: ChoiceColumn({
            label: 'Asset Type',
            choices: {
                laptop: { label: 'Laptop' },
                desktop: { label: 'Desktop' },
                monitor: { label: 'Monitor' },
                virtual_desktop: { label: 'Virtual Desktop' },
                other: { label: 'Other' },
            },
            mandatory: true,
        }),
        assignment_status: ChoiceColumn({
            label: 'Assignment Status',
            choices: {
                requested: { label: 'Requested' },
                reserved: { label: 'Reserved' },
                assigned: { label: 'Assigned' },
                returned: { label: 'Returned' },
            },
            default: 'requested',
            mandatory: true,
        }),
        is_loaner: BooleanColumn({ label: 'Is Loaner', default: false, mandatory: true }),
        requested_date: DateTimeColumn({ label: 'Requested Date', mandatory: true }),
        allocation_date: DateTimeColumn({ label: 'Allocation Date' }),
        assigned_by: ReferenceColumn({ label: 'Assigned By', referenceTable: 'sys_user' }),
        remarks: StringColumn({ label: 'Remarks', maxLength: 4000 }),
    },
})
