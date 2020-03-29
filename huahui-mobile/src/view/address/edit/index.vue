<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      :show-delete="showDelete"
      :address-info="addressInfo"
      :show-set-default="showDefault"
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="columnsPlaceholder"
      @save="onSave"
      @delete="onDelete"
      @change-default="changeDefault"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script src="./edit.js"></script>
