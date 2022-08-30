<template lang="pug">
	.b-home
		el-upload.upload-demo(
			:auto-upload="false"
			:file-list="images"
			:on-change="upload"
			:on-remove="remove"
			:limit="10"
			action=""
			accept="image/*"
			drag
			multiple
		)
			i.el-icon-upload
			.el-upload__text Drop file here or
				em  click to upload
				.el-upload__tip(
					slot="tip"
				) jpg/png files with a size less than 500kb
		transition(
			name="fade"
			mode="out-in"
		)
			el-select(
				v-if="isImagesUploaded"
				:value="optionsValue"
				v-on:input="setValue"
				placeholder="Choose a mode"
			)
				el-option(
					v-for="field in optionsFields"
					:key="field.value"
					:label="field.label"
					:value="field.value"
				)
		transition(
			name="fade"
			mode="out-in"
		)
			el-button(
				:disabled="isShowViewModeButton"
				icon="el-icon-data-board"
				@click="goToFullScreen"
			) Go to view mode
		el-dialog(
			:visible.sync="dialog.show"
			fullscreen
		)
			el-carousel(
				v-if="isImagesUploaded"
				:autoplay="false"
				arrow="always"
				trigger="click"
				indicator-position="none"
			)
				el-carousel-item(
					v-for="img in images"
					:key="img.raw.uid"
				)
					img.preview-image(
						:class="imageClasses"
						:src="createImgUrl(img.raw)"
					)
			div(
				slot="footer"
				class="dialog-footer"
			)
				el-select(
					v-if="isImagesUploaded"
					:value="optionsValue"
					v-on:input="setValue"
					placeholder="Choose a mode"
				)
					el-option(
						v-for="field in optionsFields"
						:key="field.value"
						:label="field.label"
						:value="field.value"
					)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {ImagesImagesGetter} from "@/store/modules/images/getters";
import {Action, Getter} from "@/decorators";
import {OptionsFieldsGetter, OptionsValueGetter} from "@/store/modules/options/getters";
import {viewMode} from "@/store/modules/options/state";
import {OptionsSetValueAction} from "@/store/modules/options/actions";

@Component
export default class Home extends Vue {
	@Getter('images/images') images!: ImagesImagesGetter
	@Getter('options/fields') optionsFields!: OptionsFieldsGetter
	@Getter('options/value') optionsValue!: OptionsValueGetter
	@Action('options/setValue') setValue!: OptionsSetValueAction

	dialog = {
		show: false,
	}
	
	upload(res: File, file: File[]) {
		file.forEach(img => {
			if (this.images.indexOf(img) === -1) this.images.push(img)
		})
	}
	
	remove(file: File) {
		const index = this.images.indexOf(file)
		if (index !== -1) {
			this.images.splice(index, 1)
		}
	}
	
	goToFullScreen() {
		this.dialog.show = true
	}
	
	createImgUrl(file: File) {
		return URL.createObjectURL(file)
	}
	
	chooseOptionValue(e: Event) {
		console.log(e)
	}
	
	get isImagesUploaded() {
		return this.images.length
	}
	
	get isModeSelected() {
		return this.optionsValue.length
	}
	
	get isShowViewModeButton() {
		return !(this.isImagesUploaded && this.isModeSelected)
	}
	
	get imageClasses() {
		switch (this.optionsValue) {
			case viewMode.FILL:
				return 'fill'
			case viewMode.COVER:
				return 'cover'
			case viewMode.CONTAIN:
				return 'contain'
			case viewMode.NONE:
				return 'none'
		}
	}
}
</script>

<style lang="scss">
	.home {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 30px;
	}
	.preview-image {
		height: 100%;
		width: 100%;
	}
	.fill {
		object-fit: fill;
	}
	.cover {
		object-fit: cover;
	}
	.contain {
		object-fit: contain;
	}
	.none {
		object-fit: none;
	}
	.upload-demo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.el-carousel {
		height: 100%;
		&__container {
			height: 100% !important;
		}
	}
	.el-input {
		font-size: 16px !important;
	}
	.el-upload {
		&__tip {
			text-align: center;
		}
	}
	.el-upload-dragger {
		@media (max-width: 649px) {
			width: 300px !important;
		}
	}
	.el-upload-list {
		padding-top: 20px !important;
		width: 300px;
	}
	.el-dialog {
		&__header {
			padding: 0 !important;
		}
		&__body {
			height: 90%;
			padding: 40px 30px !important;
			box-sizing: border-box;
		}
		&__footer {
			text-align: center !important;
		}
	}
	.none-events {
		pointer-events: none;
	}
</style>
