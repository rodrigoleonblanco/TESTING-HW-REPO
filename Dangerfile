# Check that the commit title has a maximum of 50 characters
commit_messages = git.commits.map(&:message)
commit_messages.each do |message|
  title, *description = message.split("\n")

  if title.length > 50
    fail("Commit title should be no longer than 50 characters.")
  end

  if description.any? && description.first.strip != ""
    fail("There should be a blank line between the title and description.")
  end

  if description.join("\n").length < 5
    warn("The description should be at least 5 characters long.")
  end

  description.each do |line|
    if line.length > 72
      warn("Each line in the description should not exceed 72 characters.")
    end
  end
end
