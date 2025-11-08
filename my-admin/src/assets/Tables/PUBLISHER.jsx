import { DataTable, List , Create} from 'react-admin';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const PublisherList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="PUB_ID" />
            {/* <DataTable.Col source="id" /> */}
            <DataTable.Col source="PUB_NAME" />
            <DataTable.Col source="PUB_TELNUM" />
            <DataTable.Col source="PUB_ADDRESS" />
        </DataTable>
    </List>
);

export const PublisherEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="PUB_ID" />
            {/*<TextInput source="id" />*/}
            <TextInput source="PUB_NAME" />
            <TextInput source="PUB_TELNUM" />
            <TextInput source="PUB_ADDRESS" />
        </SimpleForm>
    </Edit>
);

export const PublisherCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="PUB_ID" />
            {/*<TextInput source="id" />*/}
            <TextInput source="PUB_NAME" />
            <TextInput source="PUB_TELNUM" />
            <TextInput source="PUB_ADDRESS" />
        </SimpleForm>
    </Create>
);