---
theme: one
src: ./pages/title.md
hide: false
---

---
layout: splash
mainTitle: "命名"
image: "/public/sub-visual.jpg"
---

---

# 命名

## 変数やメソッド、クラス名の名前を考えること

利用料金
- Fee ?
- Price ?
- Charge ?
- usage fee?

<img src="/public/fee.png" />

---
layout: splash
mainTitle: "名前設計とは"
image: "/public/sub-visual.jpg"
---

---

# 名前設計とは

## 命名を単なる名付けと考えず、設計として考える

### 命名　≒　名前設計　=　目的駆動名前設計
単に変数・メソッドに名前を付けるのではなく、名前から目的・意図が読み取れるようにする

### 設計
ある課題を解決するためのしくみや奥蔵を、考えたり、作り上げること

---
layout: splash
mainTitle: "重要なポイント6選"
image: "/public/sub-visual.jpg"
---

---
layout: full
---

<img src="/public/selection6-1.png" />

---
layout: full
---

<img src="/public/selection6-2.png" />

---

# 良くない名前設計の一例

<img src="/public/example-1.png" />

---

# 良くない名前設計の改善例

<img src="/public/example-2.png" />


---
layout: full
---

<img src="/public/selection6-3.png" />

---
layout: default
---

# 技術駆動命名

## 技術ベースの命名では意図が分かりにくくなる

### コンピュータ技術由来
memory, cache, thread, register, など

### プログラミング技術由来
function, method, class, module, など

### 型名由来
int, str(string), flag(boolean), など

---
layout: full
---

<img src="/public/selection6-4.png" />

---

# 形容詞で区別が必要な命名

例）最大HPはメンバーの最大HPに防具のHP増加効果を付与したもの

```ts
const maxHitPoint = member.maxHitPoint + armor.maxHitPointIncrements()
```

「補正された」最大HP、「もともとの」最大HP、といった具合に形容詞での区別が必要。

```ts
const correctedMaxHitPoint = member.originalMaxHitPoint + armor.maxHitPointIncrements()
```

このようにすれば、頭の中で補完せずとも意味を理解することができる。

---
layout: full
---

<img src="/public/selection6-5.png" />

---

# Manager、Helper

ManagerやHelperはクラスの巨大化・複雑化を誘発する

```php
class NewsHelper {
  // 短いディスクリプションを取得する
  static function getShortDescription(NewsArticle $newsArticle): string { ... }

  // 整形された更新日時を取得する
  static function getFormattedUpdatedDate(NewsArticle $newsArticle): string { ... }

  // 整形された本文を取得する
  static function getFormattedBody(NewsArticle $newsArticle): string { ... }
}
```

---

# 参考

- [良いコード／悪いコードで学ぶ設計入門](https://gihyo.jp/book/2022/978-4-297-12783-1)
