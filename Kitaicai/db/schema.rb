# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "atsiliepimas", primary_key: "ID", id: :integer, default: 0, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date "Data", null: false
    t.boolean "Teigiamas", null: false
    t.string "Aprasymas", null: false
    t.integer "fk_AutomobilisID", null: false
    t.integer "fk_DalisID", null: false
    t.integer "fk_RemontasID", null: false
    t.integer "fk_KlientasID", null: false
    t.index ["fk_AutomobilisID"], name: "pakaitinis_turi"
    t.index ["fk_DalisID"], name: "ivertina"
    t.index ["fk_KlientasID"], name: "raso"
  end

  create_table "automobilis", primary_key: "ID", id: :integer, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "VIN", null: false
    t.string "Marke", null: false
    t.string "Modelis", null: false
    t.float "Kubatura", limit: 53, null: false
    t.date "Gamybos_Metai", null: false
    t.string "Registracijos_numeris", null: false
    t.boolean "Pakaitinis_Auto", null: false
    t.string "Kuras", limit: 15, null: false
    t.integer "fk_KlientasID"
    t.string "fk_ImoneImones_Kodas", null: false
    t.integer "fk_KlientasID1", null: false
    t.index ["fk_ImoneImones_Kodas"], name: "turi_pakaitinius"
    t.index ["fk_KlientasID"], name: "fk_KlientasID", unique: true
    t.index ["fk_KlientasID1"], name: "turi"
  end

  create_table "dalis", primary_key: "ID", id: :integer, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "Matmenys"
    t.string "Kilme", null: false
    t.float "Svoris", limit: 53, null: false
    t.float "Aukstis", limit: 53, null: false
    t.float "Ilgis", limit: 53
    t.float "Plotis", limit: 53
    t.string "Pavadinimas", null: false
    t.float "Pirkimo_Kaina", limit: 53, null: false
    t.float "Pardavimo_Kaina", limit: 53, null: false
    t.string "Kategorija", limit: 15, null: false
    t.integer "fk_UžsakymasId"
    t.index ["fk_UžsakymasId"], name: "uzsako"
  end

  create_table "darbuotojas", primary_key: "tabelio_nr", id: :integer, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "Vardas", null: false
    t.string "Pavarde", null: false
    t.string "Pareigos", null: false
    t.string "Slaptazodis", null: false
    t.integer "RemontasID", null: false
    t.string "fk_ImoneImones_Kodas", null: false
    t.index ["RemontasID"], name: "fk_RemontasID", unique: true
    t.index ["fk_ImoneImones_Kodas"], name: "dirba"
  end

  create_table "gedimas", primary_key: "ID", id: :integer, default: 0, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "Aprasymas", null: false
    t.string "Kategorija", limit: 15
    t.integer "fk_RemontasID", null: false
    t.integer "fk_AutomobilisID", null: false
    t.index ["fk_AutomobilisID"], name: "turi1"
    t.index ["fk_RemontasID"], name: "fk_RemontasID", unique: true
  end

  create_table "imone", primary_key: "Imones_Kodas", id: :string, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "Pavadinimas", null: false
    t.string "Adresas", null: false
    t.string "Tel_nr", null: false
    t.string "El_pastas", null: false
    t.string "Kodas", null: false
  end

  create_table "klientas", primary_key: "ID", id: :integer, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "Slapyvardis"
    t.string "Vardas", null: false
    t.string "Pavarde", null: false
    t.string "Slaptazodis", null: false
    t.string "Tipas", limit: 10
  end

  create_table "pageidavimas", primary_key: "ID", id: :integer, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date "Data", null: false
    t.string "Tekstas", null: false
    t.string "Tipas", limit: 15, null: false
    t.integer "fk_KlientasID", null: false
    t.index ["fk_KlientasID"], name: "pateikia"
  end

  create_table "remontas", primary_key: "ID", id: :integer, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date "Pradzia", null: false
    t.date "Numatoma_pabaiga"
    t.float "Remonto_kaina", limit: 53, null: false
    t.boolean "Baigtas", null: false
    t.integer "fk_UžsakymasId", null: false
    t.index ["fk_UžsakymasId"], name: "uzsako1"
  end

  create_table "saskaita", id: :integer, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date "Data", null: false
    t.float "Suma", limit: 53, null: false
  end

  create_table "trukstama_dalis", primary_key: "id_Trukstama_Dalis", id: :integer, default: 0, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date "Data", null: false
    t.string "Dalis", null: false
    t.integer "fk_Darbuotojastabelio_nr"
    t.index ["fk_Darbuotojastabelio_nr"], name: "fk_Darbuotojastabelio_nr", unique: true
  end

  create_table "trukstama_dalis_darbuotojas", primary_key: ["fk_Trukstama_Dalisid_Trukstama_Dalis", "fk_Darbuotojastabelio_nr"], force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "fk_Trukstama_Dalisid_Trukstama_Dalis", default: 0, null: false
    t.integer "fk_Darbuotojastabelio_nr", default: 0, null: false
    t.index ["fk_Darbuotojastabelio_nr"], name: "fk_Darbuotojastabelio_nr"
  end

  create_table "užsakymas", primary_key: "Id", id: :integer, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.date "Data", null: false
    t.date "Gražinimo_data", null: false
    t.string "Busena", limit: 15, null: false
    t.integer "fk_Saskaitatabelio_nr", null: false
    t.integer "fk_KlientasID", null: false
    t.integer "fk_AutomobilisID", null: false
    t.index ["fk_AutomobilisID"], name: "fk_AutomobilisID", unique: true
    t.index ["fk_KlientasID"], name: "fk_KlientasID", unique: true
    t.index ["fk_Saskaitatabelio_nr"], name: "fk_Saskaitatabelio_nr", unique: true
  end

  create_table "wp_commentmeta", primary_key: "meta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "comment_id", default: 0, null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.index ["comment_id"], name: "comment_id"
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
  end

  create_table "wp_comments", primary_key: "comment_ID", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "comment_post_ID", default: 0, null: false, unsigned: true
    t.text "comment_author", null: false
    t.string "comment_author_email", limit: 100, default: "", null: false
    t.string "comment_author_url", limit: 200, default: "", null: false
    t.string "comment_author_IP", limit: 100, default: "", null: false
    t.datetime "comment_date", null: false
    t.datetime "comment_date_gmt", null: false
    t.text "comment_content", limit: 16777215, null: false
    t.integer "comment_karma", default: 0, null: false
    t.string "comment_approved", limit: 20, default: "1", null: false
    t.string "comment_agent", default: "", null: false
    t.string "comment_type", limit: 20, default: "", null: false
    t.bigint "comment_parent", default: 0, null: false, unsigned: true
    t.bigint "user_id", default: 0, null: false, unsigned: true
    t.index ["comment_approved", "comment_date_gmt"], name: "comment_approved_date_gmt"
    t.index ["comment_author_email"], name: "comment_author_email", length: { comment_author_email: 10 }
    t.index ["comment_date_gmt"], name: "comment_date_gmt"
    t.index ["comment_parent"], name: "comment_parent"
    t.index ["comment_post_ID"], name: "comment_post_ID"
    t.index ["comment_type"], name: "woo_idx_comment_type"
  end

  create_table "wp_duplicator_packages", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=latin1" do |t|
    t.string "name", limit: 250, null: false
    t.string "hash", limit: 50, null: false
    t.integer "status", null: false
    t.datetime "created", null: false
    t.string "owner", limit: 60, null: false
    t.binary "package", limit: 16777215, null: false
    t.index ["hash"], name: "hash"
  end

  create_table "wp_links", primary_key: "link_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "link_url", default: "", null: false
    t.string "link_name", default: "", null: false
    t.string "link_image", default: "", null: false
    t.string "link_target", limit: 25, default: "", null: false
    t.string "link_description", default: "", null: false
    t.string "link_visible", limit: 20, default: "Y", null: false
    t.bigint "link_owner", default: 1, null: false, unsigned: true
    t.integer "link_rating", default: 0, null: false
    t.datetime "link_updated", null: false
    t.string "link_rel", default: "", null: false
    t.text "link_notes", limit: 4294967295, null: false
    t.string "link_rss", default: "", null: false
    t.index ["link_visible"], name: "link_visible"
  end

  create_table "wp_options", primary_key: "option_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "option_name", limit: 191
    t.text "option_value", limit: 4294967295, null: false
    t.string "autoload", limit: 20, default: "yes", null: false
    t.index ["option_name"], name: "option_name", unique: true
  end

  create_table "wp_postmeta", primary_key: "meta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "post_id", default: 0, null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
    t.index ["post_id"], name: "post_id"
  end

  create_table "wp_posts", primary_key: "ID", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "post_author", default: 0, null: false, unsigned: true
    t.datetime "post_date", null: false
    t.datetime "post_date_gmt", null: false
    t.text "post_content", limit: 4294967295, null: false
    t.text "post_title", limit: 16777215, null: false
    t.text "post_excerpt", limit: 16777215, null: false
    t.string "post_status", limit: 20, default: "publish", null: false
    t.string "comment_status", limit: 20, default: "open", null: false
    t.string "ping_status", limit: 20, default: "open", null: false
    t.string "post_password", default: "", null: false
    t.string "post_name", limit: 200, default: "", null: false
    t.text "to_ping", limit: 16777215, null: false
    t.text "pinged", limit: 16777215, null: false
    t.datetime "post_modified", null: false
    t.datetime "post_modified_gmt", null: false
    t.text "post_content_filtered", limit: 4294967295, null: false
    t.bigint "post_parent", default: 0, null: false, unsigned: true
    t.string "guid", default: "", null: false
    t.integer "menu_order", default: 0, null: false
    t.string "post_type", limit: 20, default: "post", null: false
    t.string "post_mime_type", limit: 100, default: "", null: false
    t.bigint "comment_count", default: 0, null: false
    t.index ["post_author"], name: "post_author"
    t.index ["post_name"], name: "post_name", length: { post_name: 191 }
    t.index ["post_parent"], name: "post_parent"
    t.index ["post_type", "post_status", "post_date", "ID"], name: "type_status_date"
  end

  create_table "wp_term_relationships", primary_key: ["object_id", "term_taxonomy_id"], force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "object_id", default: 0, null: false, unsigned: true
    t.bigint "term_taxonomy_id", default: 0, null: false, unsigned: true
    t.integer "term_order", default: 0, null: false
    t.index ["term_taxonomy_id"], name: "term_taxonomy_id"
  end

  create_table "wp_term_taxonomy", primary_key: "term_taxonomy_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "term_id", default: 0, null: false, unsigned: true
    t.string "taxonomy", limit: 32, default: "", null: false
    t.text "description", limit: 4294967295, null: false
    t.bigint "parent", default: 0, null: false, unsigned: true
    t.bigint "count", default: 0, null: false
    t.index ["taxonomy"], name: "taxonomy"
    t.index ["term_id", "taxonomy"], name: "term_id_taxonomy", unique: true
  end

  create_table "wp_termmeta", primary_key: "meta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "term_id", default: 0, null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
    t.index ["term_id"], name: "term_id"
  end

  create_table "wp_terms", primary_key: "term_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "name", limit: 200, default: "", null: false
    t.string "slug", limit: 200, default: "", null: false
    t.bigint "term_group", default: 0, null: false
    t.index ["name"], name: "name", length: { name: 191 }
    t.index ["slug"], name: "slug", length: { slug: 191 }
  end

  create_table "wp_usermeta", primary_key: "umeta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "user_id", default: 0, null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
    t.index ["user_id"], name: "user_id"
  end

  create_table "wp_users", primary_key: "ID", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "user_login", limit: 60, default: "", null: false
    t.string "user_pass", default: "", null: false
    t.string "user_nicename", limit: 50, default: "", null: false
    t.string "user_email", limit: 100, default: "", null: false
    t.string "user_url", limit: 100, default: "", null: false
    t.datetime "user_registered", null: false
    t.string "user_activation_key", default: "", null: false
    t.integer "user_status", default: 0, null: false
    t.string "display_name", limit: 250, default: "", null: false
    t.index ["user_email"], name: "user_email"
    t.index ["user_login"], name: "user_login_key"
    t.index ["user_nicename"], name: "user_nicename"
  end

  create_table "wp_wc_download_log", primary_key: "download_log_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.datetime "timestamp", null: false
    t.bigint "permission_id", null: false, unsigned: true
    t.bigint "user_id", unsigned: true
    t.string "user_ip_address", limit: 100, default: ""
    t.index ["permission_id"], name: "permission_id"
    t.index ["timestamp"], name: "timestamp"
  end

  create_table "wp_wc_webhooks", primary_key: "webhook_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "status", limit: 200, null: false
    t.text "name", null: false
    t.bigint "user_id", null: false, unsigned: true
    t.text "delivery_url", null: false
    t.text "secret", null: false
    t.string "topic", limit: 200, null: false
    t.datetime "date_created", null: false
    t.datetime "date_created_gmt", null: false
    t.datetime "date_modified", null: false
    t.datetime "date_modified_gmt", null: false
    t.integer "api_version", limit: 2, null: false
    t.integer "failure_count", limit: 2, default: 0, null: false
    t.boolean "pending_delivery", default: false, null: false
    t.index ["user_id"], name: "user_id"
  end

  create_table "wp_woocommerce_api_keys", primary_key: "key_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "user_id", null: false, unsigned: true
    t.string "description", limit: 200
    t.string "permissions", limit: 10, null: false
    t.string "consumer_key", limit: 64, null: false
    t.string "consumer_secret", limit: 43, null: false
    t.text "nonces", limit: 4294967295
    t.string "truncated_key", limit: 7, null: false
    t.datetime "last_access"
    t.index ["consumer_key"], name: "consumer_key"
    t.index ["consumer_secret"], name: "consumer_secret"
  end

  create_table "wp_woocommerce_attribute_taxonomies", primary_key: "attribute_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "attribute_name", limit: 200, null: false
    t.string "attribute_label", limit: 200
    t.string "attribute_type", limit: 20, null: false
    t.string "attribute_orderby", limit: 20, null: false
    t.integer "attribute_public", default: 1, null: false
    t.index ["attribute_name"], name: "attribute_name", length: { attribute_name: 191 }
  end

  create_table "wp_woocommerce_downloadable_product_permissions", primary_key: "permission_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "download_id", limit: 36, null: false
    t.bigint "product_id", null: false, unsigned: true
    t.bigint "order_id", default: 0, null: false, unsigned: true
    t.string "order_key", limit: 200, null: false
    t.string "user_email", limit: 200, null: false
    t.bigint "user_id", unsigned: true
    t.string "downloads_remaining", limit: 9
    t.datetime "access_granted", null: false
    t.datetime "access_expires"
    t.bigint "download_count", default: 0, null: false, unsigned: true
    t.index ["download_id", "order_id", "product_id"], name: "download_order_product"
    t.index ["order_id"], name: "order_id"
    t.index ["product_id", "order_id", "order_key", "download_id"], name: "download_order_key_product", length: { order_key: 191 }
  end

  create_table "wp_woocommerce_log", primary_key: "log_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.datetime "timestamp", null: false
    t.integer "level", limit: 2, null: false
    t.string "source", limit: 200, null: false
    t.text "message", limit: 4294967295, null: false
    t.text "context", limit: 4294967295
    t.index ["level"], name: "level"
  end

  create_table "wp_woocommerce_order_itemmeta", primary_key: "meta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "order_item_id", null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
    t.index ["order_item_id"], name: "order_item_id"
  end

  create_table "wp_woocommerce_order_items", primary_key: "order_item_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.text "order_item_name", limit: 4294967295, null: false
    t.string "order_item_type", limit: 200, default: "", null: false
    t.bigint "order_id", null: false, unsigned: true
    t.index ["order_id"], name: "order_id"
  end

  create_table "wp_woocommerce_payment_tokenmeta", primary_key: "meta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "payment_token_id", null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 32 }
    t.index ["payment_token_id"], name: "payment_token_id"
  end

  create_table "wp_woocommerce_payment_tokens", primary_key: "token_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "gateway_id", limit: 200, null: false
    t.text "token", null: false
    t.bigint "user_id", default: 0, null: false, unsigned: true
    t.string "type", limit: 200, null: false
    t.boolean "is_default", default: false, null: false
    t.index ["user_id"], name: "user_id"
  end

  create_table "wp_woocommerce_sessions", primary_key: "session_key", id: :string, limit: 32, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "session_id", null: false, unsigned: true, auto_increment: true
    t.text "session_value", limit: 4294967295, null: false
    t.bigint "session_expiry", null: false, unsigned: true
    t.index ["session_id"], name: "session_id", unique: true
  end

  create_table "wp_woocommerce_shipping_zone_locations", primary_key: "location_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "zone_id", null: false, unsigned: true
    t.string "location_code", limit: 200, null: false
    t.string "location_type", limit: 40, null: false
    t.index ["location_id"], name: "location_id"
    t.index ["location_type", "location_code"], name: "location_type_code", length: { location_type: 10, location_code: 20 }
  end

  create_table "wp_woocommerce_shipping_zone_methods", primary_key: "instance_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "zone_id", null: false, unsigned: true
    t.string "method_id", limit: 200, null: false
    t.bigint "method_order", null: false, unsigned: true
    t.boolean "is_enabled", default: true, null: false
  end

  create_table "wp_woocommerce_shipping_zones", primary_key: "zone_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "zone_name", limit: 200, null: false
    t.bigint "zone_order", null: false, unsigned: true
  end

  create_table "wp_woocommerce_tax_rate_locations", primary_key: "location_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "location_code", limit: 200, null: false
    t.bigint "tax_rate_id", null: false, unsigned: true
    t.string "location_type", limit: 40, null: false
    t.index ["location_type", "location_code"], name: "location_type_code", length: { location_code: 191 }
    t.index ["location_type"], name: "location_type"
    t.index ["tax_rate_id"], name: "tax_rate_id"
  end

  create_table "wp_woocommerce_tax_rates", primary_key: "tax_rate_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "tax_rate_country", limit: 2, default: "", null: false
    t.string "tax_rate_state", limit: 200, default: "", null: false
    t.string "tax_rate", limit: 8, default: "", null: false
    t.string "tax_rate_name", limit: 200, default: "", null: false
    t.bigint "tax_rate_priority", null: false, unsigned: true
    t.integer "tax_rate_compound", default: 0, null: false
    t.integer "tax_rate_shipping", default: 1, null: false
    t.bigint "tax_rate_order", null: false, unsigned: true
    t.string "tax_rate_class", limit: 200, default: "", null: false
    t.index ["tax_rate_class"], name: "tax_rate_class", length: { tax_rate_class: 191 }
    t.index ["tax_rate_country"], name: "tax_rate_country"
    t.index ["tax_rate_priority"], name: "tax_rate_priority"
    t.index ["tax_rate_state"], name: "tax_rate_state", length: { tax_rate_state: 191 }
  end

  create_table "wp_woocommerce_termmeta", primary_key: "meta_id", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "woocommerce_term_id", null: false
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
    t.index ["woocommerce_term_id"], name: "woocommerce_term_id"
  end

  create_table "wp_wpsc_also_bought", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.bigint "selected_product", default: 0, null: false, unsigned: true
    t.bigint "associated_product", default: 0, null: false, unsigned: true
    t.integer "quantity", default: 0, null: false, unsigned: true
  end

  create_table "wp_wpsc_cart_contents", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.bigint "prodid", default: 0, null: false, unsigned: true
    t.string "name", default: "", null: false
    t.bigint "purchaseid", default: 0, null: false, unsigned: true
    t.decimal "price", precision: 11, scale: 2, default: "0.0", null: false
    t.decimal "pnp", precision: 11, scale: 2, default: "0.0", null: false
    t.decimal "tax_charged", precision: 11, scale: 2, default: "0.0", null: false
    t.decimal "gst", precision: 11, scale: 2, default: "0.0", null: false
    t.integer "quantity", default: 0, null: false, unsigned: true
    t.string "donation", limit: 1, default: "0", null: false
    t.string "no_shipping", limit: 1, default: "0", null: false
    t.text "custom_message", null: false
    t.text "files", null: false
    t.text "meta", limit: 4294967295
  end

  create_table "wp_wpsc_cart_item_meta", primary_key: "meta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.bigint "wpsc_cart_item_id", default: 0, null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.timestamp "meta_timestamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["meta_key", "meta_value"], name: "meta_key_and_value", length: { meta_key: 191, meta_value: 32 }
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
    t.index ["meta_timestamp"], name: "meta_timestamp_index"
    t.index ["meta_value"], name: "meta_value", length: { meta_value: 20 }
    t.index ["wpsc_cart_item_id"], name: "wpsc_cart_item_id"
  end

  create_table "wp_wpsc_checkout_forms", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.text "name", null: false
    t.string "type", limit: 64, default: "", null: false
    t.string "mandatory", limit: 1, default: "0", null: false
    t.string "display_log", limit: 1, default: "0", null: false
    t.string "default", limit: 128, default: "0", null: false
    t.string "active", limit: 1, default: "1", null: false
    t.integer "checkout_order", default: 0, null: false, unsigned: true
    t.string "unique_name", default: "", null: false
    t.text "options", limit: 4294967295, null: false
    t.string "checkout_set", limit: 64, default: "0", null: false
    t.index ["checkout_order"], name: "checkout_order"
    t.index ["unique_name"], name: "unique_name"
  end

  create_table "wp_wpsc_claimed_stock", id: false, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.bigint "product_id", default: 0, null: false, unsigned: true
    t.bigint "variation_stock_id", default: 0, null: false, unsigned: true
    t.float "stock_claimed", limit: 24, null: false
    t.datetime "last_activity", null: false
    t.string "cart_id", default: "0", null: false
    t.string "cart_submitted", limit: 1, default: "0", null: false
    t.index ["cart_submitted"], name: "cart_submitted"
    t.index ["last_activity"], name: "last_activity"
    t.index ["product_id", "variation_stock_id", "cart_id"], name: "unique_key", unique: true
  end

  create_table "wp_wpsc_coupon_codes", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.string "coupon_code", default: ""
    t.decimal "value", precision: 11, scale: 2, default: "0.0", null: false
    t.string "is-percentage", limit: 1, default: "0", null: false
    t.string "use-once", limit: 1, default: "0", null: false
    t.string "is-used", limit: 1, default: "0", null: false
    t.string "active", limit: 1, default: "1", null: false
    t.string "every_product", default: "", null: false
    t.datetime "start", null: false
    t.datetime "expiry", null: false
    t.text "condition"
    t.index ["active"], name: "active"
    t.index ["coupon_code"], name: "coupon_code"
    t.index ["expiry"], name: "expiry"
    t.index ["start"], name: "start"
  end

  create_table "wp_wpsc_currency_list", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.string "country", default: "", null: false
    t.string "isocode", limit: 2, default: ""
    t.string "currency", default: "", null: false
    t.string "symbol", limit: 10, default: "", null: false
    t.string "symbol_html", limit: 10, default: "", null: false
    t.string "code", limit: 3, default: "", null: false
    t.string "has_regions", limit: 1, default: "0", null: false
    t.string "tax", limit: 8, default: "", null: false
    t.string "continent", limit: 20, default: "", null: false
    t.string "visible", limit: 1, default: "1", null: false
  end

  create_table "wp_wpsc_download_status", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.bigint "product_id", unsigned: true
    t.bigint "fileid", default: 0, null: false, unsigned: true
    t.bigint "purchid", default: 0, null: false, unsigned: true
    t.bigint "cartid", unsigned: true
    t.string "uniqueid", limit: 64, default: ""
    t.integer "downloads", default: 0, null: false
    t.string "ip_number", default: "", null: false
    t.string "active", limit: 1, default: "0", null: false
    t.datetime "datetime", null: false
    t.index ["product_id"], name: "product_id"
    t.index ["uniqueid"], name: "uniqueid", unique: true
  end

  create_table "wp_wpsc_meta", primary_key: "meta_id", force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.string "object_type", limit: 24, default: "cart_Item", null: false
    t.bigint "object_id", default: 0, null: false
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.index ["object_type", "meta_key"], name: "object_type__meta_key"
    t.index ["object_type", "object_id", "meta_key"], name: "object_type__object_id__meta_key"
  end

  create_table "wp_wpsc_product_rating", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.string "ipnum", limit: 30, default: "", null: false
    t.bigint "productid", default: 0, null: false, unsigned: true
    t.boolean "rated", default: false, null: false
    t.bigint "time", default: 0, null: false, unsigned: true
  end

  create_table "wp_wpsc_purchase_logs", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.decimal "totalprice", precision: 11, scale: 2, default: "0.0", null: false
    t.integer "statusno", limit: 2, default: 0, null: false
    t.string "sessionid", default: "", null: false
    t.string "transactid", default: "", null: false
    t.string "authcode", default: "", null: false
    t.bigint "processed", default: 1, null: false, unsigned: true
    t.bigint "user_ID", default: 0, unsigned: true
    t.string "date", default: "", null: false
    t.string "gateway", limit: 64, default: "", null: false
    t.string "billing_country", limit: 6, default: "", null: false
    t.string "shipping_country", limit: 6, default: "", null: false
    t.decimal "base_shipping", precision: 11, scale: 2, default: "0.0", null: false
    t.string "email_sent", limit: 1, default: "0", null: false
    t.string "stock_adjusted", limit: 1, default: "0", null: false
    t.decimal "discount_value", precision: 11, scale: 2, default: "0.0", null: false
    t.text "discount_data"
    t.string "track_id", limit: 50, default: ""
    t.string "billing_region", limit: 6, default: "", null: false
    t.string "shipping_region", limit: 6, default: "", null: false
    t.string "find_us", default: "", null: false
    t.string "engravetext", default: ""
    t.string "shipping_method", limit: 64
    t.string "shipping_option", limit: 128
    t.string "affiliate_id", limit: 32
    t.string "plugin_version", limit: 32
    t.text "notes"
    t.decimal "wpec_taxes_total", precision: 11, scale: 2
    t.decimal "wpec_taxes_rate", precision: 11, scale: 2
    t.index ["gateway"], name: "gateway"
    t.index ["sessionid"], name: "sessionid", unique: true
  end

  create_table "wp_wpsc_purchase_meta", primary_key: "meta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "wpsc_purchase_id", default: 0, null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.timestamp "meta_timestamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["meta_key", "meta_value"], name: "meta_key_and_value", length: { meta_key: 191, meta_value: 32 }
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
    t.index ["meta_timestamp"], name: "meta_timestamp_index"
    t.index ["meta_value"], name: "meta_value", length: { meta_value: 20 }
    t.index ["wpsc_purchase_id"], name: "wpsc_purchase_id"
  end

  create_table "wp_wpsc_region_tax", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.bigint "country_id", default: 0, null: false, unsigned: true
    t.string "name", limit: 64, default: "", null: false
    t.string "code", limit: 2, default: "", null: false
    t.float "tax", limit: 24, default: 0.0, null: false
    t.index ["country_id"], name: "country_id"
  end

  create_table "wp_wpsc_submited_form_data", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=MyISAM DEFAULT CHARSET=utf8" do |t|
    t.bigint "log_id", default: 0, null: false, unsigned: true
    t.bigint "form_id", default: 0, null: false, unsigned: true
    t.text "value", limit: 4294967295
    t.index ["log_id", "form_id"], name: "log_id"
  end

  create_table "wp_wpsc_visitor_meta", primary_key: "meta_id", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "wpsc_visitor_id", default: 0, null: false, unsigned: true
    t.string "meta_key"
    t.text "meta_value", limit: 4294967295
    t.timestamp "meta_timestamp", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.index ["meta_key", "meta_value"], name: "meta_key_and_value", length: { meta_key: 191, meta_value: 32 }
    t.index ["meta_key"], name: "meta_key", length: { meta_key: 191 }
    t.index ["meta_timestamp"], name: "meta_timestamp_index"
    t.index ["meta_value"], name: "meta_value", length: { meta_value: 20 }
    t.index ["wpsc_visitor_id"], name: "wpsc_visitor_id"
  end

  create_table "wp_wpsc_visitors", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "user_id", unsigned: true
    t.timestamp "last_active"
    t.timestamp "expires"
    t.timestamp "created"
    t.index ["created"], name: "created"
    t.index ["expires"], name: "expires"
    t.index ["last_active"], name: "last_active"
    t.index ["user_id"], name: "user_id"
  end

  create_table "wp_yoast_seo_links", id: :bigint, unsigned: true, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.string "url", null: false
    t.bigint "post_id", null: false, unsigned: true
    t.bigint "target_post_id", null: false, unsigned: true
    t.string "type", limit: 8, null: false
    t.index ["post_id", "type"], name: "link_direction"
  end

  create_table "wp_yoast_seo_meta", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci" do |t|
    t.bigint "object_id", null: false, unsigned: true
    t.integer "internal_link_count", unsigned: true
    t.integer "incoming_link_count", unsigned: true
    t.index ["object_id"], name: "object_id", unique: true
  end

  add_foreign_key "atsiliepimas", "automobilis", column: "fk_AutomobilisID", primary_key: "ID", name: "pakaitinis_turi"
  add_foreign_key "atsiliepimas", "dalis", column: "fk_DalisID", primary_key: "ID", name: "ivertina"
  add_foreign_key "atsiliepimas", "klientas", column: "fk_KlientasID", primary_key: "ID", name: "raso"
  add_foreign_key "automobilis", "imone", column: "fk_ImoneImones_Kodas", primary_key: "Imones_Kodas", name: "turi_pakaitinius"
  add_foreign_key "automobilis", "klientas", column: "fk_KlientasID", primary_key: "ID", name: "naudojasi_pakaitiniu"
  add_foreign_key "automobilis", "klientas", column: "fk_KlientasID1", primary_key: "ID", name: "turi"
  add_foreign_key "dalis", "užsakymas", column: "fk_UžsakymasId", primary_key: "Id", name: "uzsako"
  add_foreign_key "darbuotojas", "imone", column: "fk_ImoneImones_Kodas", primary_key: "Imones_Kodas", name: "dirba"
  add_foreign_key "darbuotojas", "remontas", column: "RemontasID", primary_key: "ID", name: "Darbuotojas_ibfk_1"
  add_foreign_key "gedimas", "automobilis", column: "fk_AutomobilisID", primary_key: "ID", name: "turi1"
  add_foreign_key "gedimas", "remontas", column: "fk_RemontasID", primary_key: "ID", name: "sutvarko"
  add_foreign_key "pageidavimas", "klientas", column: "fk_KlientasID", primary_key: "ID", name: "pateikia"
  add_foreign_key "remontas", "užsakymas", column: "fk_UžsakymasId", primary_key: "Id", name: "uzsako1"
  add_foreign_key "trukstama_dalis", "darbuotojas", column: "fk_Darbuotojastabelio_nr", primary_key: "tabelio_nr", name: "Trukstama_Dalis_ibfk_1"
  add_foreign_key "trukstama_dalis_darbuotojas", "darbuotojas", column: "fk_Darbuotojastabelio_nr", primary_key: "tabelio_nr", name: "Trukstama_Dalis_Darbuotojas_ibfk_2"
  add_foreign_key "trukstama_dalis_darbuotojas", "trukstama_dalis", column: "fk_Trukstama_Dalisid_Trukstama_Dalis", primary_key: "id_Trukstama_Dalis", name: "Trukstama_Dalis_Darbuotojas_ibfk_1"
  add_foreign_key "užsakymas", "automobilis", column: "fk_AutomobilisID", primary_key: "ID", name: "užsisako"
  add_foreign_key "užsakymas", "klientas", column: "fk_KlientasID", primary_key: "ID", name: "atlieka"
  add_foreign_key "užsakymas", "saskaita", column: "fk_Saskaitatabelio_nr", name: "apmoka"
  add_foreign_key "wp_wc_download_log", "wp_woocommerce_downloadable_product_permissions", column: "permission_id", primary_key: "permission_id", name: "fk_wc_download_log_permission_id", on_delete: :cascade
end
