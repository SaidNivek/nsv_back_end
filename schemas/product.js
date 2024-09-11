export default {
    name:'product',
    title:'Product',
    type:'document',
    fields: [
        {
            name:'title',
            title:'Title',
            type: 'string'
        },
        {
            name:'brand',
            title:'Brand',
            type: 'string',
            options: {
                list: [
                    {title: "Miele", value: "miele"},
                    {title: "Oreck", value: "oreck"},
                ]
            },
            validation: (Rule) => Rule.required(),
        },
    ]
}