
import {
    Table,
    StringColumn,
    ReferenceColumn,
    IntegerColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_interview_evaluation = Table({
    name: 'x_2300649_hirefl_0_interview_evaluation',
    label: 'HireFlow Interview Evaluation',
    schema: {
        evaluation_id: StringColumn({
            label: 'Evaluation ID',
            maxLength: 40,
            readOnly: true,
            unique: true,
        }),
        interview: ReferenceColumn({
            label: 'Interview',
            referenceTable: 'x_2300649_hirefl_0_interview',
            mandatory: true,
        }),
        evaluator: ReferenceColumn({
            label: 'Evaluator',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        technical_score: IntegerColumn({
            label: 'Technical Skills Score (Out of 10)',
            mandatory: true,
        }),
        communication_score: IntegerColumn({
            label: 'Communication Score (Out of 10)',
            mandatory: true,
        }),
        problem_solving_score: IntegerColumn({
            label: 'Problem Solving Score (Out of 10)',
            mandatory: true,
        }),
        overall_score: IntegerColumn({
            label: 'Overall Score (Out of 10)',
            mandatory: true,
        }),
        recommendation: ChoiceColumn({
            label: 'Recommendation',
            choices: {
                strong_hire: { label: 'Strong Hire' },
                hire: { label: 'Hire' },
                hold: { label: 'On Hold' },
                reject: { label: 'Reject' },
            },
            mandatory: true,
        }),
        strengths: StringColumn({
            label: 'Candidate Strengths',
            maxLength: 2000,
        }),
        improvement_areas: StringColumn({
            label: 'Areas for Improvement',
            maxLength: 2000,
        }),
        detailed_feedback: StringColumn({
            label: 'Detailed Feedback',
            maxLength: 4000,
        }),
    },
})
