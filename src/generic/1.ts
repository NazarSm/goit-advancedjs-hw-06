type DataType = [string, number];

function getPromise(): Promise<DataType> {
    return new Promise<DataType>((resolve) => {
        resolve(['Text', 50]);
    });
}

getPromise()
    .then((data) => {
        console.log(data);
    });

export {};