import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    DecimalColumn,
    IntegerColumn,
    DateColumn,
    DateTimeColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_fulfilment_baseline = Table({
    name: 'x_2300649_hirefl_0_fulfilment_baseline',
    label: 'HireFlow Fulfilment Baseline',
    schema: {
        task_name: StringColumn({ label: 'Task Name', maxLength: 150, mandatory: true, display: true }),
        catalog_item: ReferenceColumn({ label: 'Catalog Item', referenceTable: 'sc_cat_item' }),
        location: ReferenceColumn({ label: 'Location', referenceTable: 'cmn_location', mandatory: true }),
        source: ChoiceColumn({
            label: 'Source',
            choices: {
                configured: { label: 'Configured' },
                calculated: { label: 'Calculated' },
            },
            default: 'configured',
            mandatory: true,
        }),
        configured_days: DecimalColumn({ label: 'Configured Days' }),
        average_days: DecimalColumn({ label: 'Average Days', readOnly: true }),
        sample_count: IntegerColumn({ label: 'Sample Count', default: 0, mandatory: true, readOnly: true }),
        period_start: DateColumn({ label: 'Period Start' }),
        period_end: DateColumn({ label: 'Period End' }),
        last_calculated: DateTimeColumn({ label: 'Last Calculated', readOnly: true }),
        active: BooleanColumn({ label: 'Active', default: true, mandatory: true }),
    },
})
