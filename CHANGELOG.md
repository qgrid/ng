# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)

## [Unreleased]
- Shortcut keycode can be a sequence.
- Fix navigation behavior for row groups.
- Edit form performance improvements.
- Revisit drop-down editor.
- Column filter for date types.
- Data manipulation array marks as dirty when enter edit mode.
- Menu panels should fit screen sizes.
- Convert form editiing popup to menu.
- Expression builder plugin.
- 107+ JIRA tasks :-)

## [1.4.5] - 2019-03-26
### Fixed
- Compatibility with Chrome implementation of flex box overflow since version 73.

## [1.4.4] - 2018-04-30
### Added
- `ToggleAll` command that can be override to intersect toggle all groups action.

### Changed
- Clicking on group header leads to collapse/expand of all nodes in the view.

### Fixed
- `Group pipe` index calculation - the root cause of invalid filtering.

## [1.4.3] - 2018-04-25
### Added
- `Persistence` plugin - added groups.
- Selected chips in `column filter` plugin.

### Fixed
- `Persistence` plugin - call appropriate action commands.

### Changed
- `Rest` post/get request format.

## [1.4.2] - 2018-04-04
### Changed
- Attach `fastdom` to `vscroll`.

## [1.4.1] - 2018-04-03
### Added
- Start to use fastdom to increase rendering perfomance.
- The latest version of vscroll is used.

### Changed
- `Row Number` column is resizable by default.

### Fixed
- Not allow to enter invalid page number in the `pager target` component.
- Fixed `Toggle all` command behavior in the `column filter` plugin.

## [1.4.0] - 2018-02-07
### Added
- Column [viewWidth](https://qgrid.github.io/ng/#!/column-view-size) property.
- Filter `by` property `blanks` option support.
- Layer for blank state.

### Changed
- Show (Blanks) checkbox in column filter if there is empty string, null or undefined in the list.
- Explicitly set `display: inline` for label in column sort plugin.

## [1.3.4] - 2018-02-02
### Fixed
- Explicitly set height for column chooser and column filter plugins so angular material can apply correct layout.
- Correct binding handling in the root component. 

### Changed
- Change q-grid-embed styles.
- Better layout of column filter and column sort icons.

## [1.3.3] - 2018-01-26
### Fixed
- `isBusy` setup before digest is invoked.
- Don't scroll page scroll if can't scroll grid further.
- Fixed width of column chooser and column filter dialogs.

## [1.3.2] - 2018-01-25
### Fixed
- Column filter and column chooser style enhancements.
- Navigation fixes.
- Persist row details state on grid invalidate.

### Changed
- Do focus cell only with keyboard when `selection unit` is `row` or `column`.

## [1.3.1] - 2018-01-24
### Added
- Added comments to core d.ts files.
- `Blank` button in persistence plugin to load empty configuration.
- Possibility to choose page in the `pager`.
- `Clear` button to the column filter plugin.
- Micro animations for columns sort and cell navigation.
- Added possibility to resize rows `<q-grid-row canResize="true">.
- Added possibility to drag rows `<q-grid-row canDrag="true">.
- Reducer property to `pipe.model`.
- [Rest plugin](https://qgrid.github.io/ng/#!/rest).

### Changed
- Style name for the focused cell `q-grid-focus` -> `q-gird-focused`.
- Refactor styles to the common format.
- Move common functionality from framework specific components to core.
- Put core under the root folder.
- Remove global `ENV` variable.
- Remove rgba from cell border styles, it works badly in `collapse` mode.

### Fixed
- Scroll top/left calculations on cell navigation.
- View rect value.
- Call digest on start invalidate.
- `Select All` perfomance.

## [1.2.0] - 2017-12-01
### Added
- Added `compare` property to the column [Sorting](https://qgrid.github.io/ng/#!/sorting-model).
- Validation humane labels.
- Validation array support.

### Fixed
- Mouse `wheel` is working on whole grid.
- Fix infinite scrolling request new data time.

### Changed
- +20% speed to `virtual` scrolling.
- +15% `style API` performance.
- 70% of core plugins are reusable from other frameworks.  
- Better mechanism to handle dom loaded event, `scene rounds`. 
- Row model `height property` now default value is function.

## [1.1.3] - 2017-11-24
### Fixed
- Editor position does not work when parent element applies transformations. 

## [1.1.2] - 2017-11-24
### Fixed
- Scroll jumping when column sorting is applied.
- Angular 1.5.8 as development base and appropriate code fixes.

## [1.1.1] - 2017-11-22
### Added
- Github integration with travis. 

### Fixed
- Cell editor should follow the cell position on window resize.
- Keyboard navigation performance.

## [1.1.0] - 2017-11-21
### Added
- [Legend plugin](https://qgrid.github.io/ng/#!/legend). 
- Added `composite` utility to the grid service.
- [Validation model](https://qgrid.github.io/ng/#!/validation).
- Use [LIVR](https://github.com/koorchik/js-validator-livr) as internal validation engine.
- Add clear button to file and image cell editors.
- Command priorities.
- `Tab trap` component that is used in the url editor.
- Prevent default directive.
- `Go command` in navigation model that can be use for user control.

### Fixed
- Handle space key down in view mode.
- Cell editors not limited by grid area.
- Redraw highlighting on page size changed.
- Fix escape press behavior in auto-complete editor. 
- Fix enter press behavior in email editor.
- Use `focusin` event for the grid active indicator. 
- Correct way to handle editor property for different column types.  

### Changed
- (Persistence plugin)[(https://qgrid.github.io/ng/#!/persistence)] enhancements. Default settings, editing, tooltips. 
- Get rid of cancel and save buttons in all cell editors, exceptions are: reference, file and image editors.
- Edit keyboard navigation improvements.
- Edit works in `virtual` mode.
- Keyboard navigation improvements in `virtual` mode.

## [1.0.65] - 2017-11-09
### Fixed
- ENV variable in min version is not defined.
- Added injector to PersistencePanelController.

## [1.0.64] - 2017-11-09
### Added
- Start using changelog.
- To display grid title just write `<q-grid header="My Grid">`.
- Click `Revert Row` in Data Manipulation plugin menu restores origin values for the row.
- New property for array column `itemLabel` that can be used to display complex collection as a text.
- New column `widthMode` property is used to convert percents to px depend on a grid size, can be `relative` or `absolute`.
- New property `assertFactory` in filter model allows to change filter operator behavior for complex cases. 
- New `Save\Load` plugin, just add `<q-grid:persistence></q-grid:persistence>` inside of your grid, persistence model can be used for extension.
- Focus delay can be setup from attribute `q-grid:delay`. 

### Changed
- Column Filters and Column Chooser plugins start to behave as menus.
- Release scipt - base branch name as an argument `npm run release -- --base-branch model-save`.
- Column Chooser sarted to apply settings only after submit click.
- Remove reset button in Column Filter and Column Chooser plugins.

### Fixed
- Blank template is not showing on startup.
- Data Manipulation plugin not rewriting grid actions.

### Removed
- Client side column filter started to work with column labels, not values. Now you can just store value from `const filterBy = filter().by` and restore it by simply execute `filter({by: filterBy})`.

## [1.0.0] - 2017-11-09
### Added
- Demo application.
- Webpack build ES6.
- Linting with eslint.
- Karma tests.
- SCSS loader.
- CI\CD scripts.
- Add grid to npm.
- Add grid to bower.
- Theme support.
- Material theme that is used angular material inside.
- Grid service that allows to create grid model and get more control on the grid itself.
- Make grid header and footer sticky.
- Sticky footer.
- Top, left, right, bottom toolbars.
- Embed flex css framework, that was extracted from angular-material. 
- Auto generation modes for columns.
- Allow to reorder columns.
- Allow to resize columns.
- Allow to setup width of column in percents.
- Allow to have custom templates for cells in html.
- Column multi-sort support
- Column sort modes: single, multiple
- Column sorting depends on position
- Frozen columns.
- Custom.
- Array column type.
- Bool column type.
- Date column type.
- Email column type.
- Group column type.
- Number column type.
- Pad column type.
- Password column type.
- Pivot column type.
- Row indicator column type.
- Row number column type.
- Select column type.
- File column type.
- Time column type.
- Image column type.
- Url column type.
- Currency column type.
- Row options column type.
- Row expand column type.
- Row details column type.
- Reference column type.
- Id column type.
- Row details.
- Cell inline editing.
- Auto generation of row edit form.
- Cell navigation with keyboard.
- Mouse navigation.
- Style API to apply runtime style to the cells and rows.
- Row and cell highlighting.
- Initial implementation of virtual scrolling.
- Infinite scrolling.
- Focus cell API.
- Range selection.
- Row selection.
- Cell selection.
- Mix selection, when user can select row by clicking on row-indicator column or cell.
- Selection key that allows to reduce data row to some valuable thing.
- Selection modes: single and multiple.
- Keyboard editing support.
- Edit API.
- Autocomplete editor.
- Dropdown editor.
- Textarea editor.
- Column filter plugin.
- Initial filter row implementation.
- Filter API for custom filters.
- Column grouping.
- Custom hierarchy for grouping.
- Column pivoting.
- Import/Export to csv, excel and pdf.
- Column aggregation.
- Plugin system.
- Column chooser plugin.
- Popup plugin.
- Group bar plugin.
- Sort bar plugin.
- Selection bar plugin.
- Pivot bar plugin.
- Pager plugin.
- Progress plugin.
- Visibility plugin.
- Action bar plugin.
- Data manipulation plugin.

[Unreleased]: https://github.com/qgrid/ng/compare/v1.4.5...HEAD
[1.4.5]: https://github.com/qgrid/ng/compare/v1.4.5...v1.4.4
[1.4.4]: https://github.com/qgrid/ng/compare/v1.4.4...v1.4.3
[1.4.3]: https://github.com/qgrid/ng/compare/v1.4.3...v1.4.1
[1.4.1]: https://github.com/qgrid/ng/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/qgrid/ng/compare/v1.3.4...v1.4.0
[1.3.4]: https://github.com/qgrid/ng/compare/v1.3.3...v1.3.4
[1.3.3]: https://github.com/qgrid/ng/compare/v1.3.2...v1.3.3
[1.3.2]: https://github.com/qgrid/ng/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/qgrid/ng/compare/v1.2.0...v1.3.1
[1.2.0]: https://github.com/qgrid/ng/compare/v1.1.3...v1.2.0
[1.1.3]: https://github.com/qgrid/ng/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/qgrid/ng/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/qgrid/ng/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/qgrid/ng/compare/v1.0.65...v1.1.0
[1.0.65]: https://github.com/qgrid/ng/compare/v1.0.64...v1.0.65
[1.0.64]: https://github.com/qgrid/ng/compare/v1.0.63...v1.0.64
