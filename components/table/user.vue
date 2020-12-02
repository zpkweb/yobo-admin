<template>
  <el-table :data="data" border height="250" style="width: 100%">
    <el-table-column prop="name" label="姓名" >
    </el-table-column>
    <el-table-column prop="email" label="邮箱" >
    </el-table-column>
    <el-table-column prop="phone" label="手机" >
    </el-table-column>

    <el-table-column prop="createdDate" label="创建日期" >
    </el-table-column>

    <el-table-column label="操作" >
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["data"],
  methods: {

    handleEdit(index, row) {
      console.log(index, row)
      this.$router.push(`${this.$route.path}/create?userId=${row.userId}`)
    },
    handleDelete(index, row) {
      this.$emit('remove-user', index, row.userId)
    },
  },
}
</script>
