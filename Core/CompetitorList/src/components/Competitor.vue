<template>
    <!--
    <div>
        <table>
            <tbody>
                <tr>-->
                    <td>{{ firstName }}</td>
                    <td>{{ lastName }}</td>
                    <td>{{ rank }}</td>
                <!--</tr>
            </tbody>
        </table>
    </div>-->
</template>

<script>
export default {
    props: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        rank: {
            type: Number,
            required: true,
        },
    },
};
</script>
