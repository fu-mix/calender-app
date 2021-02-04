# Calendar アプリ　仕様

# コンポーネント

- Navigation
  - タイトル
  - 月切り替え(ページネーション)
  - 現在の月表示と切り替え
- Calendar Board
  - 日(calendar element)をグリッド形式で表示
- Calendar Element
  - 曜日表示(一行目のみ)
  - 今日の日付強調(今日の日付は丸で囲まれて表示)
  - 日付の表示
  - スケジュールの表示
- Modal
  - スケジュールの入力用
  - 曜日は選択された日付がデフォルトで表示
- Schedule
  - 渡された予定を表示する
  - 選択するとスケジュール入力モーダルを表示する

# インターフェース

- Navigation

| name   | type   |
| ------ | ------ |
| titile | string |

- Calendar Borad
- Calendar Element

| name  | type   |
| ----- | ------ |
| year  | string |
| month | string |
| date  | string |
| day   | string |

- Modal

| name  | type   |
| ----- | ------ |
| year  | string |
| month | string |
| date  | string |
| day   | string |

- Schedule

| name     | type   |
| -------- | ------ |
| schedule | string |

# types

- スケジュール情報

```ts
interface Schedule {
  id: number{
  date: ISOString;
  title: string;
  location: string;
  description: string;
  }
}
```

```ts
interface ScheduleData {
  schedules: Schedule[];
}
```

# store

- 構造

```ts
intarface AppState
{
  cache:{
    schedules:Schdule[]
  },
  cal_board:{
    schedules:Schedule[];
    modalOpen:boolen
  }
}

```

- 初期値

```ts
const initialState {
  cache:{
    schedules: []
  },
  cal_board:{
    schedules:[];
    modalOpen:false
  }
} as ScheduleData
```

# バックエンド

下記のバックエンドアプリを利用。
後々は GraphQL で作り直したい。
https://github.com/Dragon-taro/calender-app/tree/master/server

## 仕様

### 特定の月の予定を全件取得

```
GET /schedules
```

### パラメーター

| name  | type   | require |
| ----- | ------ | ------- |
| month | number | yes     |
| year  | number | yes     |

### 例

```
$ curl -X GET "localhost:8080/api/schedules?month=1&year=2021"
```

### 予定の追加

```
POST /schedules
```

### パラメーター

| name        | type      | require |
| ----------- | --------- | ------- |
| title       | string    | yes     |
| data        | ISOString | yes     |
| description | string    | no      |
| location    | string    | no      |

### 例

```
$ curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"title": "会議", "description": "経営戦略について", "date": "2019-11-11T15:54:14.000Z", "location": "会議室A"}' \
  "localhost:8080/api/schedules"
```

### 予定の削除

```
DELETE /schedules/:id
```

### パラメーター

| name | type   | require |
| ---- | ------ | ------- |
| id   | number | yes     |

### 例

```
$ curl "localhost:8080/api/schedules/1
```

### サンプルデータの追加

```
$ curl -X POST "localhost:8080/api/schedules/create-test-data"
```
