# Calendar アプリ　仕様

## コンポーネント

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

## インターフェース

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

## types

- スケジュール情報

```ts
interface Schedule {
  year: string;
  month: string;
  date: string;
  day: string;
  title: string;
  place: string;
  note: string;
}
```

## store

```ts
const initialState {
    today: {
        year:"",
        month:"",
        data:"",
        day:""
    }
    schedules: []
}
```

## バックエンド
