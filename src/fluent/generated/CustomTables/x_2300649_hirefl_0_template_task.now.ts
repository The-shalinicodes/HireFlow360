import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    BooleanColumn,
    IntegerColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_template_task = Table({
    name: 'x_2300649_hirefl_0_template_task',
    label: 'HireFlow Template Task',
    schema: {
        template: ReferenceColumn({ label: 'Template', referenceTable: 'x_2300649_hirefl_0_onboarding_template', mandatory: true }),
        task_name: StringColumn({ label: 'Task Name', maxLength: 150, mandatory: true, display: true }),
        category: ChoiceColumn({
            label: 'Category',
            choices: {
                hr: { label: 'HR' },
                it: { label: 'IT' },
                finance: { label: 'Finance' },
                security: { label: 'Security' },
                facilities: { label: 'Facilities' },
                training: { label: 'Training' },
            },
            mandatory: true,
        }),
        owner_type: ChoiceColumn({
            label: 'Owner Type',
            choices: {
                group: { label: 'Group' },
                joiner: { label: 'Joiner' },
                manager: { label: 'Line Manager' },
                buddy: { label: 'Buddy' },
                resource_manager: { label: 'Resource Manager' },
            },
            default: 'group',
            mandatory: true,
        }),
        // Required only when owner_type = group (enforce with a UI Policy / Data Policy).
        owner_group: ReferenceColumn({ label: 'Owner Group', referenceTable: 'sys_user_group' }),
        mandatory: BooleanColumn({ label: 'Mandatory', default: false, mandatory: true }),
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
        sla_definition: ReferenceColumn({ label: 'SLA Definition', referenceTable: 'contract_sla' }),
        evidence_required: BooleanColumn({ label: 'Evidence Required', default: false, mandatory: true }),
        catalog_item: ReferenceColumn({ label: 'Catalog Item', referenceTable: 'sc_cat_item' }),
        applicability_condition: StringColumn({ label: 'Applicability Condition', maxLength: 4000 }),
        offset_days: IntegerColumn({ label: 'Offset Days', default: 0, mandatory: true }),
        sla_days: IntegerColumn({ label: 'SLA Days', default: 0, mandatory: true }),
        verification_source: ChoiceColumn({
            label: 'Verification Source',
            choices: {
                none: { label: 'None' },
                asset: { label: 'Asset' },
                account: { label: 'Account' },
                bgv: { label: 'BGV' },
                pf: { label: 'PF' },
                esi: { label: 'ESI' },
                training: { label: 'Training' },
                document: { label: 'Document' },
                security: { label: 'Security' },
                facilities: { label: 'Facilities' },
            },
            default: 'none',
            mandatory: true,
        }),
        active: BooleanColumn({ label: 'Active', default: true, mandatory: true }),
    },
})
