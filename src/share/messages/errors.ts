export const errFn = {
    missData: (data: string[]) => new Error(`The field(s): '${data.toString()}' is required!`),
    databaseErr: () => new Error('Occurred an error on database, please try again later '),
    itemNotFound: () => new Error('Item not found')
}

