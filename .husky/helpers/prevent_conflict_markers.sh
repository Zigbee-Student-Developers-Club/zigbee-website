#!/usr/bin/env sh

repeat() {
  char="$1"
  times="$2"
  text=""
  i=0

  while [ $i -lt $times ]
  do
    text="${text}${char}"
    i=$((i+1))
  done
  echo "$text"
}

prevent_conflict_markers() {
  RED=$(tput setab 1)
  NORMAL=$(tput sgr0)

  # Check for standard Git conflict markers (with space after)
  occurrences_count=$(git --no-pager diff --staged --ignore-blank-lines --name-only -G"^<<<<<<< |^=======$|^>>>>>>> " | wc -l)
  if [ "$occurrences_count" -gt 0 ]
  then
    echo "$RED ERROR $NORMAL Found conflict markers in staged files."
    echo "Conflict markers should be removed from the following files before committing:"
    git --no-pager diff --staged --ignore-blank-lines --name-only -G"^<<<<<<< |^=======$|^>>>>>>> "
    exit 1;
  fi
}
