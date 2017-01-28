export default function pivotBuilder(columnMap, pivotBy, valueFactory) {
	return rows => pivotBy.length ? [] : null;
}