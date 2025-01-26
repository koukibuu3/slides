---
theme: one
src: ./pages/title.md
hide: false
---

---
layout: two-cols
layoutClass: gap-16
---

<div class="p-8 bg-green-700">
  <div class="text-6xl text-white text-center my-8" style="font-weight:600;" >
    疎結合
  </div>
  <div class="text-2xl text-white text-center my-4">
    構成要素間の結びつきや互いの依存関係が弱く、各々の独立性が高い状態のこと。
  </div>
  <div class="text-2xl text-white text-center my-4">
    一部の修正が他の要素に及ぼす度合いが小さいため、拡張性や可読性に優れる。<br>障害が起こりにくい状態。
  </div>
</div>

::right::

<div class="p-8 bg-green-700">
  <div class="text-6xl text-white text-center my-8" style="font-weight:600;" >
    密結合
  </div>
  <div class="text-2xl text-white text-center my-4">
    構成要素間の結びつきや互いの依存関係が強く、各々の独立性が低い状態のこと。
  </div>
  <div class="text-2xl text-white text-center my-4">
    <span class="underline">各要素が互いに深く結びついているため、一部分の変更が他の要素に及ぼす度合いが大きい。</span><br>障害が起こりやすい状態。
  </div>
</div>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

---
layout: fact
---

# 結論

継承はよっぽど注意して扱わないと危険。
継承は推奨しません。


---
layout: splash
mainTitle: "問題：スーパークラス依存"
image: "/public/sub-visual.jpg"
---

---

# 問題：スーパークラス依存

```java
class PhysicalAttack {
  // 1回攻撃のダメージ値を返す
  int singleAttackDamage() { ... }

  // 2回攻撃のダメージ値を返す
  int doubleAttackDamage() { ... }
}
```

```java {all|9}
class FighterPhysicalAttack extends PhysicalAttack {
  @Override
  int singleAttackDamage() {
    return super.singleAttackDamage() + 20;
  }

  @Override
  int doubleAttackDamage() {
    return super.doubleAttackDamage() + 10;
  }
}
```

Override した `singleAttackDamage()` をベースに2倍の計算 + 補正を行うため意図しない数値になる。

---
layout: splash
mainTitle: "解決策：継承より移譲"
image: "/public/sub-visual.jpg"
---

---

# 解決策：継承より移譲

```java
class PhysicalAttack {
  // 1回攻撃のダメージ値を返す
  int singleAttackDamage() { ... }

  // 2回攻撃のダメージ値を返す
  int doubleAttackDamage() { ... }
}
```

```java {all|2,5,9}
class FighterPhysicalAttack extends PhysicalAttack {
  private final PhysicalAttack physicalAttack;

  int singleAttackDamage() {
    return physicalAttack.singleAttackDamage() + 20;
  }

  int doubleAttackDamage() {
    return physicalAttack.doubleAttackDamage() + 10;
  }
}
```

インスタンス変数として保持した `physicalAttack` を元に処理を行うため意図しない数値にならない。

---

# 参考

- [良いコード／悪いコードで学ぶ設計入門](https://gihyo.jp/book/2022/978-4-297-12783-1)
