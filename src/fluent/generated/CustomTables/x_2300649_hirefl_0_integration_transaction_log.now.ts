import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    IntegerColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_integration_transaction_log = Table({
    name: 'x_2300649_hirefl_0_integration_transaction_log',
    label: 'HireFlow Integration Transaction Log',
    audit: true,
    schema: {
        transaction_id: StringColumn({ label: 'Transaction ID', maxLength: 60, readOnly: true, unique: true }),
        joiner: ReferenceColumn({ label: 'Joiner', referenceTable: 'x_2300649_hirefl_0_joiner' }),
        integration_name: ChoiceColumn({
            label: 'Integration Name',
            choices: {
                ats: { label: 'ATS' },
                bgv: { label: 'BGV' },
                payroll_erp: { label: 'Payroll/ERP' },
                it_asset: { label: 'IT Asset' },
                facilities: { label: 'Facilities' },
                e_signature: { label: 'E-Signature' },
                rms: { label: 'Resource Management' },
                identity_access: { label: 'Identity & Access' },
                lms: { label: 'LMS / Training' },
            },
            mandatory: true,
        }),
        external_reference: StringColumn({ label: 'External Reference', maxLength: 150 }),
        transaction_type: ChoiceColumn({
            label: 'Transaction Type',
            choices: {
                request: { label: 'Request' },
                response: { label: 'Response' },
                callback: { label: 'Callback' },
            },
            mandatory: true,
        }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                pending: { label: 'Pending' },
                in_progress: { label: 'In Progress' },
                success: { label: 'Success' },
                failed: { label: 'Failed' },
                retry: { label: 'Retry' },
            },
            default: 'pending',
            mandatory: true,
        }),
        attempt_count: IntegerColumn({ label: 'Attempt Count', default: 0, mandatory: true }),
        request_date: DateTimeColumn({ label: 'Request Date', mandatory: true }),
        response_date: DateTimeColumn({ label: 'Response Date' }),
        error_message: StringColumn({ label: 'Error Message', maxLength: 4000 }),
        next_retry_date: DateTimeColumn({ label: 'Next Retry Date' }),
    },
})
