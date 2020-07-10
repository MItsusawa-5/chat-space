# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :comments
- has_many :groups, through: :groups_users


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :comments
- has_many :users, through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|message|text||
|image|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
