# Loading

### Install

``` javascript
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);
```

## Usage

### Type

```html
<van-loading />
<van-loading type="spinner" />
```

### Color

```html
<van-loading color="#1989fa" />
<van-loading type="spinner" color="#1989fa" />
```

### Text

```html
<van-loading size="24px">Loading...</van-loading>
```

### Vertical

```html
<van-loading size="24px" vertical>Loading...</van-loading>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| color | Loading color | *string* | `#c9c9c9` | - |
| type | Can be set to `spinner` | *string* | `circular` | - |
| size | Icon size | *string \| number* | `30px` | - |
| text-size | Text font size | *string \| number* | `14px` | - |
| vertical | Whether to arrange icons and text content vertically | *boolean* | `false` | - |

### Slots

| Name | Description |
|------|------|
| default | Loading text |
