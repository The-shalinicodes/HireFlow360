import {
    Table,
    StringColumn,
    DateColumn,
    ReferenceColumn,
    ChoiceColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_batch = Table({
    name: 'x_2300649_hirefl_0_batch',
    label: 'HireFlow Batch',
    schema: {
        batch_id: StringColumn({ label: 'Batch ID', maxLength: 40, readOnly: true, unique: true }),
        batch_name: StringColumn({ label: 'Batch Name', maxLength: 100, mandatory: true, display: true }),
        start_date: DateColumn({ label: 'Start Date', mandatory: true }),
        end_date: DateColumn({ label: 'End Date', mandatory: true }),
        location: ReferenceColumn({ label: 'Location', referenceTable: 'cmn_location', mandatory: true }),
        coordinator: ReferenceColumn({ label: 'Coordinator', referenceTable: 'sys_user', mandatory: true }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                planned: { label: 'Planned' },
                active: { label: 'Active' },
                completed: { label: 'Completed' },
                cancelled: { label: 'Cancelled' },
            },
            default: 'planned',
            mandatory: true,
        }),
        active: BooleanColumn({ label: 'Active', default: true, mandatory: true }),
    },
})
