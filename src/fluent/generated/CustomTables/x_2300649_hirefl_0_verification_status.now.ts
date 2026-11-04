import {
    Table,
    ReferenceColumn,
    ChoiceColumn,
    DateTimeColumn,
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_verification_status = Table({
    name: 'x_2300649_hirefl_0_verification_status',
    label: 'HireFlow Verification Status',
    audit: true,
    schema: {
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner', mandatory: true }),
        verification_type: ChoiceColumn({
            label: 'Verification Type',
            choices: {
                bgv: { label: 'BGV' },
                pf: { label: 'PF' },
                esi: { label: 'ESI' },
            },
            mandatory: true,
        }),
        vendor: ReferenceColumn({ label: 'Vendor', referenceTable: 'x_2300649_hirefl_0_bgv_vendor' }),
        state: ChoiceColumn({
            label: 'State',
            choices: {
                in_progress: { label: 'In Progress' },
                clear: { label: 'Clear' },
                discrepancy: { label: 'Discrepancy' },
                failed: { label: 'Failed' },
                not_applicable: { label: 'Not Applicable' },
            },
            default: 'in_progress',
            mandatory: true,
        }),
        ageing_start_time: DateTimeColumn({ label: 'Ageing Start Time' }),
        initiated_at: DateTimeColumn({ label: 'Initiated At', mandatory: true }),
        completed_at: DateTimeColumn({ label: 'Completed At' }),
        verified_by: ReferenceColumn({ label: 'Verified By', referenceTable: 'sys_user' }),
        external_reference: StringColumn({ label: 'External Reference', maxLength: 100 }),
        remarks: StringColumn({ label: 'Remarks', maxLength: 4000 }),
        sla_due_date: DateTimeColumn({ label: 'SLA Due Date', readOnly: true }),
        active: BooleanColumn({ label: 'Active', default: true, mandatory: true }),
    },
})
