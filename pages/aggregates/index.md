## description
You can set 'aggregation' attribute
E.g., <q-grid:column key="contact.region" aggregation="avg"></q-grid:column>:
	* first
	* last
	* max (for numbers)
	* min (for numbers)
	* minMax (for numbers; returns array [min, max])
	* avg (for numbers)
	* sum (for numbers)
	* join (return string of values, divided by separator - ', ' by default)
	* count

And you can set 'aggregation-options' attribute
E.g., <q-grid:column key="gender" aggregation="join" aggregation-options="{distinct: true, separator: '; '}"></q-grid:column>
	* distinct: true/false. false by default.
	 				calculate aggregation only for unique values.
					Works for: 'avg', 'sum', 'join', 'count' aggregations.
	* separator: any string value. ', ' by default.
					Needs for 'join' aggregation. Separate values in string.


```html
<q-grid rows="$ctrl.rows">
	<q-grid:columns generation="deep">
		<q-grid:column key="name.last" aggregation="count">
			<q-grid:template for="foot">
				<b>count: </b> {{$cell.value}}
			</q-grid:template>
		</q-grid:column>
		<q-grid:column key="contact.region" aggregation="avg" aggregation-options="{distinct: true}"></q-grid:column>
		<q-grid:column key="birthday" aggregation="first"></q-grid:column>
		<q-grid:column key="gender" aggregation="join" aggregation-options="{distinct: true, separator: '; '}"></q-grid:column>
		<q-grid:column key="memberSince" aggregation="minMax"></q-grid:column>
	</q-grid:columns>
</q-grid>
```
