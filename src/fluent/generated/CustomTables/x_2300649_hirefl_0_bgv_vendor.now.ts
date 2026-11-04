import {
    Table,
    StringColumn,
    EmailColumn,
    ChoiceColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_bgv_vendor = Table({
    name: 'x_2300649_hirefl_0_bgv_vendor',
    label: 'HireFlow BGV Vendor',
    schema: {
        vendor_name: StringColumn({ label: 'Vendor Name', maxLength: 150, mandatory: true, display: true }),
        vendor_code: StringColumn({ label: 'Vendor Code', maxLength: 40, mandatory: true, unique: true }),
        contact_email: EmailColumn({ label: 'Contact Email', mandatory: true }),
        integration_type: ChoiceColumn({
            label: 'Integration Type',
            choices: {
                rest_api: { label: 'REST API' },
                manual: { label: 'Manual' },
                mock: { label: 'Mock' },
            },
            default: 'manual',
            mandatory: true,
        }),
        vendor_status: ChoiceColumn({
            label: 'Vendor Status',
            choices: {
                active: { label: 'Active' },
                inactive: { label: 'Inactive' },
                suspended: { label: 'Suspended' },
            },
            default: 'active',
            mandatory: true,
        }),
        active: BooleanColumn({ label: 'Active', default: true, mandatory: true }),
    },
})
