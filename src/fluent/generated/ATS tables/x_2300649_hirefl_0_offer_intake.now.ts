
import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    IntegerColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_offer_intake = Table({
    name: 'x_2300649_hirefl_0_offer_intake',
    label: 'HireFlow Offer Intake',
    schema: {
        intake_id: StringColumn({
            label: 'Intake ID',
            maxLength: 40,
            readOnly: true,
            unique: true,
        }),

        processing_mode: ChoiceColumn({
            label: 'Processing Mode',
            choices: {
                single: { label: 'Single Upload' },
                batch: { label: 'Batch Upload' },
            },
            mandatory: true,
        }),

        intake_status: ChoiceColumn({
            label: 'Intake Status',
            choices: {
                uploaded: { label: 'Uploaded' },
                processing: { label: 'Processing' },
                completed: { label: 'Completed' },
                partial: { label: 'Partially Completed' },
                failed: { label: 'Failed' },
            },
            default: 'uploaded',
            mandatory: true,
        }),

        total_files: IntegerColumn({
            label: 'Total Files',
            default: 0,
        }),

        processed_files: IntegerColumn({
            label: 'Processed Files',
            default: 0,
        }),

        failed_files: IntegerColumn({
            label: 'Failed Files',
            default: 0,
        }),

        review_files: IntegerColumn({
            label: 'Files Requiring Review',
            default: 0,
        }),

        submitted_by: ReferenceColumn({
            label: 'Submitted By',
            referenceTable: 'sys_user',
        }),
    },
})
