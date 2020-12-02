<template>
  <el-table :data="data" border height="250" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="200">
    </el-table-column>
    <el-table-column prop="email" label="邮箱" width="200">
    </el-table-column>
    <el-table-column prop="phone" label="手机" width="200">
    </el-table-column>

    <el-table-column prop="createdDate" label="创建日期" width="200">
    </el-table-column>

    <el-table-column label="操作" fixed="right" width="220">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)"
          >同意</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >拒绝</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["data"]
}
</script>
