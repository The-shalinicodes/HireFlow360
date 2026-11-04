import {
    Table,
    ReferenceColumn,
    ChoiceColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_task_dependency = Table({
    name: 'x_2300649_hirefl_0_task_dependency',
    label: 'HireFlow Task Dependency',
    schema: {
        dependency_level: ChoiceColumn({
            label: 'Dependency Level',
            choices: {
                template: { label: 'Template' },
                instance: { label: 'Instance' },
            },
            mandatory: true,
        }),
        template_task: ReferenceColumn({ label: 'Template Task', referenceTable: 'x_2300649_hirefl_0_template_task' }),
        depends_on_template_task: ReferenceColumn({ label: 'Depends on Template Task', referenceTable: 'x_2300649_hirefl_0_template_task' }),
        onboarding_task: ReferenceColumn({ label: 'Onboarding Task', referenceTable: 'x_2300649_hirefl_0_onboarding_task' }),
        depends_on_onboarding_task: ReferenceColumn({ label: 'Depends on Onboarding Task', referenceTable: 'x_2300649_hirefl_0_onboarding_task' }),
        dependency_type: ChoiceColumn({
            label: 'Dependency Type',
            choices: { finish_to_start: { label: 'Finish-to-Start' } },
            default: 'finish_to_start',
            mandatory: true,
        }),
        active: BooleanColumn({ label: 'Active', default: true, mandatory: true }),
    },
})
